import React from 'react';
import StatisticList from './StatisticList';

export default {
  title: 'StatisticList',
  component: StatisticList,
};

const statistics = [
  {
    title: 'earnings',
    metric: '$ 315.2',
  },
  {
    title: 'orders',
    metric: 16,
  },
  {
    title: 'sessions',
    metric: 463,
  },
  {
    title: 'users',
    metric: 17,
  },
];

export const Deafult = () => <StatisticList statistics={statistics} />;
