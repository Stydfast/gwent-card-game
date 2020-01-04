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

const CardEffectBackground = styled.div`
  height: 105px;
  width: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('${CardEffectBackgroundImage}');
`;

const Effect = styled.div`
  height: 90px;
  width: 90px;
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
