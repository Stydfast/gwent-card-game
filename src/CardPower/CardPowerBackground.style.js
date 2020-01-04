import styled from 'styled-components';
import { getColorFromValue } from './CardPower.helper';
import CardPowerBackgroundImage from './images/card-power-background.png';

const CardPowerBackground = styled.div`
  height: 128px;
  width: 128px;
  background: url('${CardPowerBackgroundImage}');
  color: ${props => getColorFromValue(props)}
  text-align: center;
  line-height: 128px;
  font-size: 70px;
  font-weight: bold;
  font-family: sans-serif;
`;

export { CardPowerBackground };
