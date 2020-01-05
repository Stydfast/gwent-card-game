import styled from 'styled-components';
import {
  CardEffectAgileImage,
  CardEffectCloneImage,
  CardEffectImproveImage,
  CardEffectMusterImage,
  CardEffectNurseImage,
  CardEffectScorchImage,
  CardEffectSpyImage,
  CardEffectWarhornImage,
  CardEffectBackgroundImage,
} from './images';

const BIG = 'big';
const NORMAL_SIZE = '28px';
const BIG_SIZE = '50px';
const NORMAL_EFFECT_SIZE = '24px';
const BIG_EFFECT_SIZE = '46px';

const getSize = ({ size }) => {
  return size === BIG ? BIG_SIZE : NORMAL_SIZE;
};

const getEffectSize = ({ size }) => {
  console.log(size);
  return size === BIG ? BIG_EFFECT_SIZE : NORMAL_EFFECT_SIZE;
};

const CardEffectBackground = styled.div`
  height: ${props => getSize(props)};
  width: ${props => getSize(props)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-image: url('${CardEffectBackgroundImage}');
`;

const Effect = styled.div`
  height: ${props => getEffectSize(props)};
  width: ${props => getEffectSize(props)};
  background-size: contain;
  background-position: center;
`;

const CardEffectAgile = styled(Effect)`
  background-image: url('${CardEffectAgileImage}');
`;

const CardEffectClone = styled(Effect)`
  background-image: url('${CardEffectCloneImage}');
`;

const CardEffectImprove = styled(Effect)`
  background-image: url('${CardEffectImproveImage}');
`;

const CardEffectMuster = styled(Effect)`
  background-image: url('${CardEffectMusterImage}');
`;

const CardEffectNurse = styled(Effect)`
  background-image: url('${CardEffectNurseImage}');
`;

const CardEffectScorch = styled(Effect)`
  background-image: url('${CardEffectScorchImage}');
`;

const CardEffectSpy = styled(Effect)`
  background-image: url('${CardEffectSpyImage}');
`;

const CardEffectWarhorn = styled(Effect)`
  background-image: url('${CardEffectWarhornImage}');
`;

export {
  CardEffectAgile,
  CardEffectClone,
  CardEffectImprove,
  CardEffectMuster,
  CardEffectNurse,
  CardEffectScorch,
  CardEffectSpy,
  CardEffectWarhorn,
  CardEffectBackground,
};
