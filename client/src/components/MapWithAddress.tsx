import { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: '/leaflet-images/marker-icon.png',
  shadowUrl: '/leaflet-images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Define props for MapWithAddress component
interface MapWithAddressProps {
  onLocationChange: (lat: number, lon: number, addressDetails: { city: string; fullAddress: string }) => void;
}

const debounce = (func: Function, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const MapWithAddress: React.FC<MapWithAddressProps> = ({ onLocationChange }) => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Cache to store fetched location details
  const cache = new Map();

  // Fetch city name and address using Nominatim, with fallback to OpenWeather Geolocation API
  const fetchLocationDetails = async (lat: number, lon: number) => {
    const cacheKey = `${lat},${lon}`;

    // Check if the result is in the cache
    if (cache.has(cacheKey)) {
      const { cityName, fullAddress } = cache.get(cacheKey);
      onLocationChange(lat, lon, { city: cityName, fullAddress });
      return; // Return early if cached result is used
    }

    try {
      const nominatimResponse = await axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
          lat,
          lon,
          format: 'json',
        },
        headers: {
          'User-Agent': 'Neighborhood Aid',
        }
      });
      const nominatimAddress = nominatimResponse.data.address;
      let cityName = nominatimAddress.city || nominatimAddress.town || nominatimAddress.village;
      const fullAddress = `${nominatimAddress.house_number || ''} ${nominatimAddress.road || ''}, ${
        nominatimAddress.city || nominatimAddress.town || nominatimAddress.village
      }, ${nominatimAddress.state}, ${nominatimAddress.postcode}, ${nominatimAddress.country}`;

      // If city is missing from Nominatim, fallback to OpenWeather geolocation
      if (!cityName) {
        const openWeatherGeoResponse = await axios.get('/api/weather', {
          params: { lat, lon },
        });
        cityName = openWeatherGeoResponse.data.name || 'Unknown City';
      }

      // Cache the result
      cache.set(cacheKey, { cityName, fullAddress });

      // Pass the lat, lon, and city data back to the parent component
      onLocationChange(lat, lon, { city: cityName, fullAddress });
    } catch (error) {
      setError('Failed to fetch address or city name');
    }
  };

  const debouncedFetchLocationDetails = debounce(fetchLocationDetails, 300);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        debouncedFetchLocationDetails(e.latlng.lat, e.latlng.lng); // Use the debounced function
      },
    });
    return position ? <Marker position={position} icon={customMarkerIcon} /> : null;
  };

  return (
    <div>
      <MapContainer center={position || [34.0522, -118.2437]} zoom={13} style={{ height: '300px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
      {error && <p>{error}</p>}
    </div>
  );
};

export default MapWithAddress;
