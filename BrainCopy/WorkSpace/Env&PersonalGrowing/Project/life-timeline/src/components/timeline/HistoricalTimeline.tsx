import React from 'react';
import { motion } from 'framer-motion';
import TimelineEvent from './TimelineEvent';
import { useTimelineData } from '../../hooks/useTimelineData';
import type { HistoricalEvent } from '../../types/timeline';

interface HistoricalTimelineProps {
  categories: string[];
  userBirthYear: number;
}

const HistoricalTimeline: React.FC<HistoricalTimelineProps> = ({ 
  categories, 
  userBirthYear 
}) => {
  const { historicalEvents, loading } = useTimelineData(categories);

  const calculateAgeAtEvent = (eventYear: number): number => {
    return eventYear - userBirthYear;
  };

  if (loading) {
    return <div className="flex justify-center items-center h-32">加载中...</div>;
  }

  return (
    <div className="p-6 space-y-4">
      {historicalEvents.map((event: HistoricalEvent, index: number) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <TimelineEvent
            event={event}
            userAge={calculateAgeAtEvent(event.year)}
            type="historical"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HistoricalTimeline;