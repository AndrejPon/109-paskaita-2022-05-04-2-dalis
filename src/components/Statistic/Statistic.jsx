import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Statistic.style';

const Statistic = ({ title, metric }) => {
  return (
    <S.Statistic>
      <S.Title>{title}</S.Title>
      <S.Metric>{metric}</S.Metric>
    </S.Statistic>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
};

export default Statistic;
