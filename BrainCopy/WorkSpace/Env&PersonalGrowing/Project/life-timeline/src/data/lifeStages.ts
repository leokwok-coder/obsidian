import { UserProfile, PersonalEvent } from '../types/timeline';

export const generateLifeStages = (userProfile: UserProfile): PersonalEvent[] => {
  const { birthDate } = userProfile;
  const birthYear = birthDate.getFullYear();
  
  const stages: Omit<PersonalEvent, 'id'>[] = [
    {
      type: 'birth',
      title: '出生',
      startDate: birthDate,
      ageAtEvent: 0,
      description: `出生于${userProfile.birthPlace}`
    },
    {
      type: 'education',
      title: '幼儿园',
      startDate: new Date(birthYear + 3, 8, 1),
      endDate: new Date(birthYear + 6, 6, 1),
      ageAtEvent: 3,
      description: '幼儿园教育阶段'
    },
    {
      type: 'education',
      title: '小学',
      startDate: new Date(birthYear + 6, 8, 1),
      endDate: new Date(birthYear + 12, 6, 1),
      ageAtEvent: 6,
      description: '小学教育阶段'
    },
    {
      type: 'education',
      title: '初中',
      startDate: new Date(birthYear + 12, 8, 1),
      endDate: new Date(birthYear + 15, 6, 1),
      ageAtEvent: 12,
      description: '初中教育阶段'
    },
    {
      type: 'education',
      title: '高中',
      startDate: new Date(birthYear + 15, 8, 1),
      endDate: new Date(birthYear + 18, 6, 1),
      ageAtEvent: 15,
      description: '高中教育阶段'
    },
    {
      type: 'education',
      title: '大学',
      startDate: new Date(birthYear + 18, 8, 1),
      endDate: new Date(birthYear + 22, 6, 1),
      ageAtEvent: 18,
      description: '本科教育阶段'
    },
    {
      type: 'education',
      title: '研究生',
      startDate: new Date(birthYear + 22, 8, 1),
      endDate: new Date(birthYear + 25, 6, 1),
      ageAtEvent: 22,
      description: '研究生教育阶段'
    },
    {
      type: 'work',
      title: '第一份工作',
      startDate: new Date(birthYear + 22, 6, 1),
      ageAtEvent: 22,
      description: '职业生涯开始'
    },
    {
      type: 'work',
      title: '创业',
      startDate: new Date(birthYear + 28, 0, 1),
      ageAtEvent: 28,
      description: '创业阶段'
    }
  ];

  return stages.map((stage, index) => ({
    ...stage,
    id: `personal-${index}`
  }));
};