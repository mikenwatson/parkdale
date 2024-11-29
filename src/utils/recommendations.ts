import { Vehicle } from '../types/vehicle';
import { BookingDetails } from '../types/booking';

interface UserPreference {
  searchHistory: string[];
  previousBookings: BookingDetails[];
  preferredVehicles: string[];
  lastViewed: string[];
  occasions: string[];
}

export function getInitialPreferences(): UserPreference {
  const stored = localStorage.getItem('userPreferences');
  return stored ? JSON.parse(stored) : {
    searchHistory: [],
    previousBookings: [],
    preferredVehicles: [],
    lastViewed: [],
    occasions: []
  };
}

export function updatePreferences(preferences: Partial<UserPreference>) {
  const current = getInitialPreferences();
  const updated = { ...current, ...preferences };
  localStorage.setItem('userPreferences', JSON.stringify(updated));
  return updated;
}

export function addToHistory(vehicle: string) {
  const preferences = getInitialPreferences();
  const searchHistory = [vehicle, ...preferences.searchHistory.slice(0, 4)];
  updatePreferences({ searchHistory });
}

export function addToLastViewed(vehicle: string) {
  const preferences = getInitialPreferences();
  const lastViewed = [vehicle, ...preferences.lastViewed.filter(v => v !== vehicle).slice(0, 4)];
  updatePreferences({ lastViewed });
}

export function generateRecommendations(vehicles: Vehicle[]): Vehicle[] {
  const preferences = getInitialPreferences();
  
  // Create a scoring system for vehicles
  const scores = new Map<string, number>();
  
  vehicles.forEach(vehicle => {
    let score = 0;
    
    // Boost score based on search history
    if (preferences.searchHistory.includes(vehicle.name)) {
      score += 3;
    }
    
    // Boost score based on previous bookings
    const bookingCount = preferences.previousBookings.filter(
      booking => booking.vehicle === vehicle.name
    ).length;
    score += bookingCount * 2;
    
    // Boost score based on last viewed
    const lastViewedIndex = preferences.lastViewed.indexOf(vehicle.name);
    if (lastViewedIndex !== -1) {
      score += (5 - lastViewedIndex);
    }
    
    scores.set(vehicle.name, score);
  });
  
  // Sort vehicles by score
  return [...vehicles].sort((a, b) => 
    (scores.get(b.name) || 0) - (scores.get(a.name) || 0)
  );
}