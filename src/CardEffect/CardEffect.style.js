import styled from 'styled-components';

const BIG = 'big';
const NORMAL_SIZE = '28px';
const BIG_SIZE = '80px';
const NORMAL_EFFECT_SIZE = '24px';
const BIG_EFFECT_SIZE = '60px';

const getSize = ({ size }) => {
  return size === BIG ? BIG_SIZE : NORMAL_SIZE;
};

const getEffectSize = ({ size }) => {
  return size === BIG ? BIG_EFFECT_SIZE : NORMAL_EFFECT_SIZE;
};

const CardEffectBackground = styled.div`
  height: ${props => getSize(props)};
  width: ${props => getSize(props)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-image: url('assets/images/effects/card-effect-background.png');
`;

const Effect = styled.div`
  height: ${props => getEffectSize(props)};
  width: ${props => getEffectSize(props)};
  background-size: contain;
  background-position: center;
`;

const CardEffectAgile = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-agile.png');
`;

const CardEffectClone = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-clone.png');
`;

const CardEffectImprove = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-improve.png');
`;

const CardEffectMuster = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-muster.png');
`;

const CardEffectNurse = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-nurse.png');
`;

const CardEffectScorch = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-scorch.png');
`;

const CardEffectSpy = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-spy.png');
`;

const CardEffectWarhorn = styled(Effect)`
  background-image: url('assets/images/effects/card-effect-warhorn.png');
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
