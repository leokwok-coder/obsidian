import React, { useState } from 'react';
import HistoricalTimeline from '../timeline/HistoricalTimeline';
import PersonalTimeline from '../timeline/PersonalTimeline';
import CategoryFilter from '../inputs/CategoryFilter';
import type { UserProfile } from '../../types/timeline';

interface SplitLayoutProps {
  userProfile: UserProfile;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ userProfile }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="flex h-screen">
      {/* 左侧历史面板 - 40% */}
      <div className="w-2/5 flex flex-col border-r border-accent/30">
        <div className="p-4 border-b border-accent/20">
          <CategoryFilter 
            selectedCategories={selectedCategories}
            onChange={setSelectedCategories}
          />
        </div>
        <div className="flex-1 overflow-auto">
          <HistoricalTimeline 
            categories={selectedCategories}
            userBirthYear={userProfile.birthDate.getFullYear()}
          />
        </div>
      </div>

      {/* 右侧个人面板 - 60% */}
      <div className="w-3/5 flex flex-col">
        <div className="p-4 border-b border-accent/20">
          <h2 className="text-xl font-bold text-secondary">
            个人时间线
          </h2>
        </div>
        <div className="flex-1 overflow-auto">
          <PersonalTimeline userProfile={userProfile} />
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;