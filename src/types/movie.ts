export interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  genre: string[];
  duration: string;
  language: string[];
  certificate: string;
  cast: string[];
}

export interface ShowTime {
  id: string;
  time: string;
  price: {
    classic: number;
    prime: number;
    recliner: number;
  };
  seatsAvailable: {
    classic: number;
    prime: number;
    recliner: number;
  };
}

export interface Language {
  code: string;
  name: string;
}