
export interface RobotVacuum {
  id: string;
  brand: string;
  model: string;
  price: number;
  suctionPower: number; // in Pascals (Pa)
  canMop: boolean;
  climbingThreshold: number; // in mm (the "jump" capability)
  batteryLife: number; // in minutes
  rating: number; // 0-5
  features: string[];
  imageUrl: string;
  link: string;
}

export interface ComparisonFilters {
  maxPrice: number;
  minSuction: number;
  mustMop: boolean;
  minClimbing: number;
  search: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
