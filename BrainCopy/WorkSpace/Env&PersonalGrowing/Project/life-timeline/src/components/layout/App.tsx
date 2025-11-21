import React, { useState } from 'react';
import SplitLayout from '../layout/SplitLayout';
import UserProfileForm from '../inputs/UserProfileForm';
import type { UserProfile } from '../../types/timeline';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  if (!userProfile) {
    return <UserProfileForm onSubmit={setUserProfile} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-slate-900 to-primary">
      <SplitLayout userProfile={userProfile} />
    </div>
  );
};

export default App;