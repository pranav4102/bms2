export interface Seat {
  id: string;
  row: string;
  number: number;
  type: 'classic' | 'prime' | 'recliner';
  price: number;
  isBooked: boolean;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  city: string;
  facilities: string[];
}

export interface ShowTiming {
  id: string;
  movieId: string;
  theaterId: string;
  startTime: string;
  endTime: string;
  screen: string;
  seats: Seat[];
}

export interface Booking {
  id: string;
  userId: string;
  showId: string;
  seats: string[];
  totalAmount: number;
  paymentStatus: 'pending' | 'completed' | 'failed';
  bookingStatus: 'confirmed' | 'cancelled';
  createdAt: string;
}