export interface Weather {
  condition?: string;
  temperature?: number;
  humidity?: number;
  wind?: number;
}

export interface Report {
  id: string;
  originalId: number;
  title: string;
  description: string; 
  lat: number;
  lon: number;
  email: string;
  phone?: string;
  contacted: boolean;
  createdAt: string;
  status: string;
  weather?: Weather; 
  city?: string; 
  type: string;
}
