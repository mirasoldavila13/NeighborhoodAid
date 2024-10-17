import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: '/leaflet-images/marker-icon.png',
  shadowUrl: '/leaflet-images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface ReportMapProps {
  lat: number;
  lon: number;
  title: string;
  description: string;
  draggable: boolean;
  onMarkerPositionChange?: (position: L.LatLng) => void; // Make optional
}

const ReportMap: React.FC<ReportMapProps> = ({ lat, lon, title, description, draggable, onMarkerPositionChange }) => {
  // Handle marker position change
  const handleMarkerDragEnd = (event: any) => {
    if (onMarkerPositionChange) {
      const position = event.target.getLatLng(); // Get new position
      onMarkerPositionChange(position); // Call the function to update marker position
    }
  };

  return (
    <MapContainer center={[lat, lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[lat, lon]}
        icon={customMarkerIcon}
        draggable={draggable} // Set the marker's draggability based on the prop
        eventHandlers={{
          dragend: handleMarkerDragEnd, // Call when drag ends
        }}
      >
        <Popup>
          <strong>{title}</strong><br />
          {description}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ReportMap;
