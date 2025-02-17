export interface Character {
  id: string;
  name: string;
  image: string;
  location: {
    id: string;
    name: string;
  };
  origin: {
    id: string;
    name: string;
  };
  episode: Array<{
    id: string;
    episode: string;
    air_date: string;
  }>;
} 