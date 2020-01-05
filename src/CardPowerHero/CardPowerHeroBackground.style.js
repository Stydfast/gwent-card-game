import styled from 'styled-components';
import CardPowerHeroBackgroundImage from './images/card-power-hero-background.png';

const CardPowerHeroValue = styled.div`
  width: 110px;
  height: 110px;
  position: absolute;
  top: 25px;
  left: 14px;
  text-align: center;
  line-height: 110px;
  font-size: 70px;
  font-family: 'Roboto';
  color: #fff;
`;

const CardPowerHeroBackground = styled.div`
  height: 250px;
  width: 250px;
  background: url('${CardPowerHeroBackgroundImage}');
  position: relative;
`;

export { CardPowerHeroBackground, CardPowerHeroValue };
