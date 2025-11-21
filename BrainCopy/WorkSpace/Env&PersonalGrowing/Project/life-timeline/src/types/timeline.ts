export interface HistoricalEvent {
  id: string;
  year: number;
  month: number;
  category: 'economic' | 'political' | 'tech' | 'social' | 'international' | 'environment';
  importance: 'low' | 'medium' | 'high' | 'highest';
  title: string;
  description: string;
  region: string;
  tags: string[];
  source?: string;
}

export interface PersonalEvent {
  id: string;
  type: 'birth' | 'education' | 'work' | 'family' | 'health' | 'other';
  title: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  ageAtEvent: number;
}

export interface UserProfile {
  birthDate: Date;
  birthPlace: string;
  educationLevel: 'primary' | 'secondary' | 'bachelor' | 'master' | 'phd';
}

export interface TimelineState {
  userProfile: UserProfile | null;
  personalEvents: PersonalEvent[];
  historicalEvents: HistoricalEvent[];
  selectedCategory: string;
  timeRange: [number, number];
  currentFocus: 'personal' | 'historical' | 'both';
}