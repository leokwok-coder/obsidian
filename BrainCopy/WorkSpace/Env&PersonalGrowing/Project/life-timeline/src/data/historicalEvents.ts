import { HistoricalEvent } from '../types/timeline';

export const historicalEventsData: HistoricalEvent[] = [
  {
    id: '1978-12',
    year: 1978,
    month: 12,
    category: 'political',
    importance: 'highest',
    title: '十一届三中全会',
    description: '会议重新确立了解放思想、实事求是的思想路线，作出把党和国家的工作重点转移到社会主义建设上来和实行改革开放的战略决策。',
    region: '全国',
    tags: ['改革开放', '政治改革']
  },
  {
    id: '1979-07',
    year: 1979,
    month: 7,
    category: 'economic',
    importance: 'high',
    title: '设立经济特区',
    description: '中共中央、国务院批转广东省委、福建省委关于对外经济活动实行特殊政策和灵活措施的报告，决定在深圳、珠海、汕头和厦门试办特区。',
    region: '沿海地区',
    tags: ['经济特区', '对外开放']
  },
  {
    id: '1992-01',
    year: 1992,
    month: 1,
    category: 'political',
    importance: 'highest',
    title: '邓小平南巡讲话',
    description: '邓小平在南方视察期间发表重要谈话，提出改革开放胆子要大一些，敢于试验，推动了建立社会主义市场经济体制的改革目标。',
    region: '南方',
    tags: ['市场经济', '改革开放']
  },
];