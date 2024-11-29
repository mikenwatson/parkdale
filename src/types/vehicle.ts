export interface Vehicle {
  name: string;
  description: string;
  images: string[];
  capacity: number;
  features: {
    icon: string;
    text: string;
  }[];
  hourlyRate: string;
}