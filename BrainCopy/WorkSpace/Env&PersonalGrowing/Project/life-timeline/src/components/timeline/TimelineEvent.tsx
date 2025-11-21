import React from 'react';
import GlassCard from '../ui/GlassCard';
import type { HistoricalEvent, PersonalEvent } from '../../types/timeline';

interface TimelineEventProps {
  event: HistoricalEvent | PersonalEvent;
  type: 'historical' | 'personal';
  userAge?: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, type, userAge }) => {
  const isHistorical = type === 'historical';
  const historicalEvent = event as HistoricalEvent;
  const personalEvent = event as PersonalEvent;

  return (
    <GlassCard className="p-4 hover:border-accent/50 transition-all duration-300">
      <div className="flex items-start space-x-4">
        {/* 时间标记 */}
        <div className={`flex-shrink-0 w-16 text-center ${
          isHistorical ? 'text-secondary' : 'text-highlight'
        }`}>
          <div className="text-2xl font-bold">
            {isHistorical ? historicalEvent.year : personalEvent.startDate.getFullYear()}
          </div>
          {isHistorical && userAge !== undefined && (
            <div className="text-xs opacity-70">
              你 {userAge} 岁
            </div>
          )}
        </div>

        {/* 事件内容 */}
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-2 ${
            isHistorical ? 'text-secondary' : 'text-highlight'
          }`}>
            {event.title}
          </h3>
          
          {isHistorical && (
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-1 text-xs bg-accent/20 text-accent rounded">
                {historicalEvent.category}
              </span>
              <span className="text-sm text-gray-400">
                {historicalEvent.region}
              </span>
            </div>
          )}

          <p className="text-gray-300 text-sm leading-relaxed">
            {event.description}
          </p>

          {isHistorical && historicalEvent.tags && (
            <div className="flex flex-wrap gap-1 mt-2">
              {historicalEvent.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs bg-primary/50 text-gray-400 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default TimelineEvent;