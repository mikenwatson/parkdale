import { useEffect } from 'react';
import { addToHistory, addToLastViewed } from '../utils/recommendations';

export function useVehicleTracking(vehicleName: string, action: 'view' | 'search') {
  useEffect(() => {
    if (action === 'view') {
      addToLastViewed(vehicleName);
    } else if (action === 'search') {
      addToHistory(vehicleName);
    }
  }, [vehicleName, action]);
}