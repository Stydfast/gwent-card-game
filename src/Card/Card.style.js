import styled from 'styled-components';

const Card = styled.div`
  height: 120px;
  width: 90px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBackground = styled(Card)`
  background-image: url('assets/images/cards/${props => props.reference}.png');
`;

const CardBuffs = styled.div`
  height: 30px;
  width: 90px;
  display: flex;
  justify-content: flex-end;
`;

export { CardBackground, CardBuffs };
