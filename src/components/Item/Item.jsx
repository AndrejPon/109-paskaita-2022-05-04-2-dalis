import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Item.style';

const Item = ({ image, title, salesNumber }) => {
  return (
    <>
      <S.ItemContainer>
        <S.Image src={image} alt='' />
        <S.Title>{title}</S.Title>
        <S.SalesNumber>{salesNumber} Sales</S.SalesNumber>
      </S.ItemContainer>
    </>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  salesNumber: PropTypes.number.isRequired,
};

export default Item;
