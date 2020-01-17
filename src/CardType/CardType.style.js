import styled from 'styled-components';

const BIG = 'big';
const NORMAL_SIZE = '28px';
const BIG_SIZE = '80px';
const NORMAL_TYPE_SIZE = '19px';
const BIG_TYPE_SIZE = '45px';

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
  background-image: url('assets/images/types/card-type-background.png');
  background-size: contain;
`;

const Type = styled.div`
  height: ${props => getTypeSize(props)};
  width: ${props => getTypeSize(props)};
  background-size: contain;
`;

const CardTypeMelee = styled(Type)`
  background-image: url('assets/images/types/card-type-melee.png');
`;

const CardTypeRanged = styled(Type)`
  background-image: url('assets/images/types/card-type-ranged.png');
`;

const CardTypeSiege = styled(Type)`
  background-image: url('assets/images/types/card-type-siege.png');
`;

const CardTypeMeleeRanged = styled(Type)`
  background-image: url('assets/images/types/card-type-melee-ranged.png');
`;

export { CardTypeBackground, CardTypeMelee, CardTypeRanged, CardTypeSiege, CardTypeMeleeRanged };
