import React from 'react';
import { motion } from 'framer-motion';
import TimelineEvent from './TimelineEvent';
import { generateLifeStages } from '../../data/lifeStages';
import type { UserProfile, PersonalEvent } from '../../types/timeline';

interface PersonalTimelineProps {
  userProfile: UserProfile;
}

const PersonalTimeline: React.FC<PersonalTimelineProps> = ({ userProfile }) => {
  const personalEvents = generateLifeStages(userProfile);

  return (
    <div className="p-6 space-y-4">
      {personalEvents.map((event: PersonalEvent, index: number) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <TimelineEvent
            event={event}
            type="personal"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PersonalTimeline;