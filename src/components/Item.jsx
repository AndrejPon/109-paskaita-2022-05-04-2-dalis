import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Item.style';

const Item = ({ image, title, salesNumber }) => {
  return (
    <>
      <S.ItemContainer>
        <S.Image src={image} alt='' />
        <S.Title>{title}</S.Title>
        <S.salesNumber>{salesNumber}</S.salesNumber>
      </S.ItemContainer>
    </>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  salesNumber: PropTypes.string.isRequired,
};

export default Item;
