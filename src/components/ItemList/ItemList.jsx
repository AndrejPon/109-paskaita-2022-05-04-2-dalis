import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ItemList.style';
import Item from '../Item/Item';

const ItemList = ({ items }) => {
  return (
    <S.ItemList>
      {items &&
        items.map((item) => (
          <Item
            image={item.image}
            title={item.title}
            salesNumber={item.salesNumber}
          />
        ))}
    </S.ItemList>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      salesNumber: PropTypes.string.isRequired,
    })
  ),
};

export default ItemList;
