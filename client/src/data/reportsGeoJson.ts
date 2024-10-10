import { FeatureCollection, Point } from "geojson";

const reportsGeoJson: FeatureCollection<Point, { title: string; description: string; contactedLocalAuthorities: boolean; }> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        title: "Pothole on Main Street",
        description: "Large pothole causing traffic disruptions.",
        contactedLocalAuthorities: true,
      },
      geometry: {
        type: "Point",
        coordinates: [-119.1404074169618, 34.53417667621265],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Broken Streetlight",
        description: "Streetlight not functioning for over a week.",
        contactedLocalAuthorities: false,
      },
      geometry: {
        type: "Point",
        coordinates: [-120.19577272004068, 35.030504556954384],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Vandalism on Wall",
        description: "Graffiti on the wall of the public library.",
        contactedLocalAuthorities: true,
      },
      geometry: {
        type: "Point",
        coordinates: [-115.21329416758374, 35.93808539349513],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Abandoned Vehicle",
        description: "Car abandoned for several days without a permit.",
        contactedLocalAuthorities: false,
      },
      geometry: {
        type: "Point",
        coordinates: [-118.99303759259635, 37.86070817012198],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Illegal Dumping",
        description: "Trash illegally dumped in a park area.",
        contactedLocalAuthorities: true,
      },
      geometry: {
        type: "Point",
        coordinates: [-109.89624190625824, 34.54104366705617],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Damaged Playground Equipment",
        description: "Broken swing set posing safety risks for children.",
        contactedLocalAuthorities: false,
      },
      geometry: {
        type: "Point",
        coordinates: [-111.51292113625124, 31.86597552388656],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Roadside Debris",
        description: "Large debris blocking a lane on the highway.",
        contactedLocalAuthorities: true,
      },
      geometry: {
        type: "Point",
        coordinates: [-121.70744002481558, 42.15958978301532],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Flooded Area",
        description: "Water accumulation causing flood on a street.",
        contactedLocalAuthorities: false,
      },
      geometry: {
        type: "Point",
        coordinates: [-115.45513171009094, 41.67862511596957],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Broken Traffic Signal",
        description: "Traffic signal not working at a busy intersection.",
        contactedLocalAuthorities: true,
      },
      geometry: {
        type: "Point",
        coordinates: [-104.44897632111622, 33.95089844956905],
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Animal Carcass on Road",
        description: "Dead animal on the road creating hazards for drivers.",
        contactedLocalAuthorities: false,
      },
      geometry: {
        type: "Point",
        coordinates: [-110.44793108150952, 42.062897469678944],
      },
    },
  ],
};

export default reportsGeoJson;
