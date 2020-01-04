import styled from 'styled-components';
import {
  CardTypeBackgroundImage,
  CardTypeMeleeImage,
  CardTypeRangedImage,
  CardTypeSiegeImage,
  CardTypeMeleeRangedImage,
} from './images';

const CardTypeBackground = styled.div`
  height: 105px;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${CardTypeBackgroundImage}');
  background-size: contain;
`;

const Type = styled.div`
  height: 65px;
  width: 65px;
  background-size: contain;
`;

const CardTypeMelee = styled(Type)`
  background-image: url('${CardTypeMeleeImage}');
`;

const CardTypeRanged = styled(Type)`
  background-image: url('${CardTypeRangedImage}');
`;

const CardTypeSiege = styled(Type)`
  background-image: url('${CardTypeSiegeImage}');
`;

const CardTypeMeleeRanged = styled(Type)`
  background-image: url('${CardTypeMeleeRangedImage}');
`;

export { CardTypeBackground, CardTypeMelee, CardTypeRanged, CardTypeSiege, CardTypeMeleeRanged };
