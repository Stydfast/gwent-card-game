import styled from 'styled-components';
import { getColorFromValue } from './CardPower.utils';
import CardPowerBackgroundImage from './images/card-power-background.png';

const BIG = 'big';
const NORMAL_SIZE = '34px';
const BIG_SIZE = '50px';
const NORMAL_FONT_SIZE = '16px';
const BIG_FONT_SIZE = '28px';

const getSize = ({ size }) => {
  return size === BIG ? BIG_SIZE : NORMAL_SIZE;
};

const getFontSize = ({ size }) => {
  return size === BIG ? BIG_FONT_SIZE : NORMAL_FONT_SIZE;
};

const CardPowerBackground = styled.div`
  height: ${props => getSize(props)};
  width: ${props => getSize(props)};
  background-size: contain;
  background-image: url('${CardPowerBackgroundImage}');
  color: ${props => getColorFromValue(props)}
  text-align: center;
  line-height: ${props => getSize(props)};
  font-size: ${props => getFontSize(props)};
  font-family: 'Roboto';
`;

export { CardPowerBackground };
