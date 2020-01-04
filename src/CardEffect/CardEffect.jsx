import React from 'react';
import { CardEffectBackground } from './CardEffect.style';
import { getCardEffect } from './CardEffect.utils';

const CardEffect = props => {
  return <CardEffectBackground>{getCardEffect(props)}</CardEffectBackground>;
};

export { CardEffect };
