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

const getCardEffect = ({ effect, size }) => {
  switch (effect) {
    case EFFECT_AGILE:
      return <CardEffectAgile size={size} />;
    case EFFECT_CLONE:
      return <CardEffectClone size={size} />;
    case EFFECT_IMPROVE:
      return <CardEffectImprove size={size} />;
    case EFFECT_MUSTER:
      return <CardEffectMuster size={size} />;
    case EFFECT_NURSE:
      return <CardEffectNurse size={size} />;
    case EFFECT_SCORCH:
      return <CardEffectScorch size={size} />;
    case EFFECT_SPY:
      return <CardEffectSpy size={size} />;
    case EFFECT_WARHORN:
      return <CardEffectWarhorn size={size} />;
    default:
      return;
  }
};

export { getCardEffect };
