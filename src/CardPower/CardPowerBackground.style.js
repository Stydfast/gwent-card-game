import styled from 'styled-components';
import { getColorFromValue } from './CardPower.utils';

const BIG = 'big';
const NORMAL_SIZE = '34px';
const BIG_SIZE = '100px';
const NORMAL_FONT_SIZE = '16px';
const BIG_FONT_SIZE = '50px';

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
  background-image: url('assets/images/misc/card-power-background.png');
  color: ${props => getColorFromValue(props)};
  text-align: center;
  line-height: ${props => getSize(props)};
  font-size: ${props => getFontSize(props)};
  font-family: 'Roboto';
`;

export { CardPowerBackground };
