import styled from 'styled-components';
import { getColorFromValue } from './CardPower.utils';
import CardPowerBackgroundImage from './images/card-power-background.png';

const CardPowerBackground = styled.div`
  height: 128px;
  width: 128px;
  background: url('${CardPowerBackgroundImage}');
  color: ${props => getColorFromValue(props)}
  text-align: center;
  line-height: 128px;
  font-size: 70px;
  font-family: 'Roboto';
`;

export { CardPowerBackground };
