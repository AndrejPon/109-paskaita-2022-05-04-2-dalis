import React from 'react';
import Statistic from './Statistic';

export default {
  title: 'Statistic',
  component: Statistic,
};

export const Default = () => (
  <Statistic title='EARNINGS' metric='$ 315.20'></Statistic>
);
