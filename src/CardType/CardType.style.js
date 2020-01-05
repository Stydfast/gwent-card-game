import styled from 'styled-components';
import {
  CardTypeBackgroundImage,
  CardTypeMeleeImage,
  CardTypeRangedImage,
  CardTypeSiegeImage,
  CardTypeMeleeRangedImage,
} from './images';

const BIG = 'big';
const NORMAL_SIZE = '28px';
const BIG_SIZE = '50px';
const NORMAL_TYPE_SIZE = '19px';
const BIG_TYPE_SIZE = '35px';

const getSize = ({ size }) => {
  return size === BIG ? BIG_SIZE : NORMAL_SIZE;
};

const getTypeSize = ({ size }) => {
  return size === BIG ? BIG_TYPE_SIZE : NORMAL_TYPE_SIZE;
};

const CardTypeBackground = styled.div`
  height: ${props => getSize(props)};
  width: ${props => getSize(props)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${CardTypeBackgroundImage}');
  background-size: contain;
`;

const Type = styled.div`
  height: ${props => getTypeSize(props)};
  width: ${props => getTypeSize(props)};
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
