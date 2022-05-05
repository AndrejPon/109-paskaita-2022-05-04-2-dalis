import styled from 'styled-components';

export const ItemContainer = styled.div`
  align-items: center;
  background: white;
  border-radius: 20px;
  border: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  height: 100px;
  margin: 0 auto;
  width: 900px;
`;

export const Image = styled.img`
  justify-self: center;
  width: 100px;
`;

export const Title = styled.h3`
  color: 1ca35e;
`;

export const SalesNumber = styled.p`
  color: gray;
  justify-self: end;
  padding-right: 30px;
`;
