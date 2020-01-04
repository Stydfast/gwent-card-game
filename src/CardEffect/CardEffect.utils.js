import React from 'react';
import {
  EFFECT_AGILE,
  EFFECT_CLONE,
  EFFECT_IMPROVE,
  EFFECT_MUSTER,
  EFFECT_NURSE,
  EFFECT_SCORCH,
  EFFECT_SPY,
  EFFECT_WARHORN,
} from './CardEffect.constants';
import {
  CardEffectAgile,
  CardEffectClone,
  CardEffectImprove,
  CardEffectMuster,
  CardEffectNurse,
  CardEffectScorch,
  CardEffectSpy,
  CardEffectWarhorn,
} from './CardEffect.style';

const getCardEffect = ({ effect }) => {
  switch (effect) {
    case EFFECT_AGILE:
      return <CardEffectAgile />;
    case EFFECT_CLONE:
      return <CardEffectClone />;
    case EFFECT_IMPROVE:
      return <CardEffectImprove />;
    case EFFECT_MUSTER:
      return <CardEffectMuster />;
    case EFFECT_NURSE:
      return <CardEffectNurse />;
    case EFFECT_SCORCH:
      return <CardEffectScorch />;
    case EFFECT_SPY:
      return <CardEffectSpy />;
    case EFFECT_WARHORN:
      return <CardEffectWarhorn />;
    default:
      return;
  }
};

export { getCardEffect };
