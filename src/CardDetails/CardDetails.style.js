import styled from 'styled-components';

const CardDetailsContainer = styled.div`
  width: 310px;
  height: 573px;
  position: relative;
  border-radius: 20px;

  & > .cardDetailsPower {
    position: absolute;
    top: 4px;
  }

  & > .cardDetailsPowerHero {
    position: absolute;
    top: -10px;
    left: -4px;
  }

  & > .cardDetailsType {
    position: absolute;
    top: 150px;
    left: 10px;
  }

  & > .cardDetailsEffect {
    position: absolute;
    top: 255px;
    left: 10px;
  }
`;

const CardDetailsBackground = styled.div`
  width: 310px;
  height: 435px;
  background-image: url('assets/images/cards/${props => props.reference}.png');
`;

const CardDetailsSeparator = styled.div`
  width: 310px;
  height: 8px;
  background-image: url('assets/images/misc/card-separator.png');
  background-size: contain;
`;

const CardDetailsDescription = styled.div`
  width: 310px;
  height: 130px;
  background-image: url('assets/images/misc/card-description.png');
  background-size: cover;
  text-align: center;
  font-family: Roboto;
  color: #333;

  & > h1 {
    width: 230px;
    height: 55px;
    margin: 0 0 0 75px;
    padding: 15px 0 5px;
    font-size: 18px;
    font-weight: 700;
  }

  & > p {
    padding: 10px;
  }
`;

const CardDetailsBanner = styled.div`
  width: 80px;
  height: 445px;
  position: absolute;
  top: 85px;
  left: 9px;
  background-image: url('assets/images/misc/card-banner-${props => props.faction}.png');
  background-size: contain;
`;

export { CardDetailsContainer, CardDetailsBackground, CardDetailsDescription, CardDetailsSeparator, CardDetailsBanner };
