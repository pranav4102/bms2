import { Movie } from '../types/movie';

export const movies: Movie[] = [
  // Hindi Movies
  {
    id: 'h1',
    title: 'Jawan',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800',
    rating: 4.5,
    genre: ['Action', 'Thriller', 'Drama'],
    duration: '2h 45min',
    language: ['Hindi'],
    certificate: 'UA',
    cast: ['Shah Rukh Khan', 'Nayanthara', 'Vijay Sethupathi']
  },
  {
    id: 'h2',
    title: 'Animal',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800',
    rating: 4.3,
    genre: ['Action', 'Crime', 'Drama'],
    duration: '3h 21min',
    language: ['Hindi'],
    certificate: 'A',
    cast: ['Ranbir Kapoor', 'Rashmika Mandanna', 'Anil Kapoor']
  },
  {
    id: 'h3',
    title: 'Dunki',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
    rating: 4.2,
    genre: ['Comedy', 'Drama'],
    duration: '2h 41min',
    language: ['Hindi'],
    certificate: 'UA',
    cast: ['Shah Rukh Khan', 'Taapsee Pannu', 'Vicky Kaushal']
  },
  // Telugu Movies
  {
    id: 't1',
    title: 'Salaar',
    imageUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800',
    rating: 4.7,
    genre: ['Action', 'Drama', 'Thriller'],
    duration: '2h 55min',
    language: ['Telugu'],
    certificate: 'UA',
    cast: ['Prabhas', 'Prithviraj Sukumaran', 'Shruti Haasan']
  },
  {
    id: 't2',
    title: 'Game Changer',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
    rating: 4.4,
    genre: ['Action', 'Political Drama'],
    duration: '2h 50min',
    language: ['Telugu'],
    certificate: 'UA',
    cast: ['Ram Charan', 'Kiara Advani']
  },
  {
    id: 't3',
    title: 'Pushpa 2: The Rule',
    imageUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800',
    rating: 4.8,
    genre: ['Action', 'Crime', 'Drama'],
    duration: '3h 10min',
    language: ['Telugu'],
    certificate: 'UA',
    cast: ['Allu Arjun', 'Rashmika Mandanna', 'Fahadh Faasil']
  },
  // Tamil Movies
  {
    id: 'tm1',
    title: 'Leo',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
    rating: 4.6,
    genre: ['Action', 'Crime', 'Thriller'],
    duration: '2h 44min',
    language: ['Tamil'],
    certificate: 'UA',
    cast: ['Vijay', 'Trisha', 'Sanjay Dutt']
  },
  {
    id: 'tm2',
    title: 'Thangalaan',
    imageUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800',
    rating: 4.3,
    genre: ['Period Drama', 'Action'],
    duration: '2h 55min',
    language: ['Tamil'],
    certificate: 'UA',
    cast: ['Vikram', 'Parvati Thiruvothu']
  },
  {
    id: 'tm3',
    title: 'Captain Miller',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800',
    rating: 4.4,
    genre: ['Action', 'Period Drama'],
    duration: '2h 37min',
    language: ['Tamil'],
    certificate: 'UA',
    cast: ['Dhanush', 'Priyanka Mohan']
  },
  // Malayalam Movies
  {
    id: 'm1',
    title: 'Malaikottai Vaaliban',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
    rating: 4.5,
    genre: ['Period Drama', 'Action'],
    duration: '2h 30min',
    language: ['Malayalam'],
    certificate: 'UA',
    cast: ['Mohanlal', 'Sonalee Kulkarni']
  },
  {
    id: 'm2',
    title: 'Bramayugam',
    imageUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800',
    rating: 4.6,
    genre: ['Horror', 'Thriller'],
    duration: '2h 24min',
    language: ['Malayalam'],
    certificate: 'UA',
    cast: ['Mammootty', 'Arjun Ashokan']
  },
  {
    id: 'm3',
    title: 'Aadujeevitham',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800',
    rating: 4.7,
    genre: ['Drama', 'Survival'],
    duration: '2h 40min',
    language: ['Malayalam'],
    certificate: 'UA',
    cast: ['Prithviraj Sukumaran']
  },
  // Kannada Movies
  {
    id: 'k1',
    title: 'Kabzaa',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
    rating: 4.2,
    genre: ['Action', 'Period Drama'],
    duration: '2h 35min',
    language: ['Kannada'],
    certificate: 'UA',
    cast: ['Upendra', 'Kichcha Sudeepa']
  },
  {
    id: 'k2',
    title: 'Kranti',
    imageUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800',
    rating: 4.3,
    genre: ['Action', 'Drama'],
    duration: '2h 30min',
    language: ['Kannada'],
    certificate: 'UA',
    cast: ['Darshan', 'Rachita Ram']
  },
  {
    id: 'k3',
    title: 'Ghost',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800',
    rating: 4.1,
    genre: ['Action', 'Thriller'],
    duration: '2h 28min',
    language: ['Kannada'],
    certificate: 'UA',
    cast: ['Shivarajkumar', 'Jayaram']
  }
];