import styled from 'styled-components';

const BIG = 'big';
const NORMAL_SIZE = '25px';
const NORMAL_FONT_SIZE = '16px';
const NORMAL_BG_SIZE = '64px';
const NORMAL_TOP = '8px';
const NORMAL_LEFT = '5px';
const BIG_SIZE = '95px';
const BIG_FONT_SIZE = '50px';
const BIG_BG_SIZE = '190px';
const BIG_TOP = '13px';
const BIG_LEFT = '5px';

const getSize = ({ size }) => {
  return size === BIG ? BIG_SIZE : NORMAL_SIZE;
};

const getFontSize = ({ size }) => {
  return size === BIG ? BIG_FONT_SIZE : NORMAL_FONT_SIZE;
};

const getBackgroundSize = ({ size }) => {
  return size === BIG ? BIG_BG_SIZE : NORMAL_BG_SIZE;
};

const getLeftSize = ({ size }) => {
  return size === BIG ? BIG_LEFT : NORMAL_LEFT;
};

const getTopSize = ({ size }) => {
  return size === BIG ? BIG_TOP : NORMAL_TOP;
};

const CardPowerHeroValue = styled.div`
  width: ${props => getSize(props)};
  height: ${props => getSize(props)};
  position: absolute;
  top: ${props => getTopSize(props)};
  left: ${props => getLeftSize(props)};
  text-align: center;
  line-height: ${props => getSize(props)};
  font-size: ${props => getFontSize(props)};
  font-family: 'Roboto';
  color: #fff;
`;

const CardPowerHeroBackground = styled.div`
  height: ${props => getBackgroundSize(props)};
  width: ${props => getBackgroundSize(props)};
  background-size: contain;
  background-image: url('assets/images/misc/card-power-hero-background.png');
  position: relative;
  top: -5px;
  left: -2px;
`;

export { CardPowerHeroBackground, CardPowerHeroValue };
