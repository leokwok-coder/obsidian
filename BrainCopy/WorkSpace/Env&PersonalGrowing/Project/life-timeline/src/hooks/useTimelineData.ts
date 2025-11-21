import { useState, useEffect } from 'react';
import type { HistoricalEvent } from '../types/timeline';
import { historicalEventsData } from '../data/historicalEvents';

export const useTimelineData = (categories: string[]) => {
  const [historicalEvents, setHistoricalEvents] = useState<HistoricalEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const filteredEvents = categories.length > 0 
      ? historicalEventsData.filter(event => categories.includes(event.category))
      : historicalEventsData;

    const sortedEvents = filteredEvents.sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    });

    setHistoricalEvents(sortedEvents);
    setLoading(false);
  }, [categories]);

  return { historicalEvents, loading };
};