import styled from 'styled-components';

const Card = styled.div`
  height: 120px;
  width: 90px;
  border-radius: 8px;
  position: relative;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 2px;

  &:hover {
    top: -10px;
    box-shadow: 0 0 0px 3px orange;
    z-index: 30;
  }
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
