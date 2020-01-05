import React from 'react';
import { TYPE_MELEE, TYPE_RANGED, TYPE_SIEGE, TYPE_MELEE_RANGED } from './CardType.constants';
import { CardTypeMelee, CardTypeRanged, CardTypeSiege, CardTypeMeleeRanged } from './CardType.style';

const getCardType = ({ type, size }) => {
  switch (type) {
    case TYPE_MELEE:
      return <CardTypeMelee size={size} />;
    case TYPE_RANGED:
      return <CardTypeRanged size={size} />;
    case TYPE_SIEGE:
      return <CardTypeSiege size={size} />;
    case TYPE_MELEE_RANGED:
      return <CardTypeMeleeRanged size={size} />;
    default:
      return;
  }
};

export { getCardType };
