import styled from 'styled-components';

export const Statistic = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
`;

export const Title = styled.p`
  color: gray;
  font-family: 'Courier New', Courier, monospace;
  font-size: 25px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const Metric = styled.h2`
  color: green;
  font-size: 40px;
  margin-top: 0;
`;
