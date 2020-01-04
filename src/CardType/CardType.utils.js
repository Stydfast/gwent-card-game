import React from 'react';
import { TYPE_MELEE, TYPE_RANGED, TYPE_SIEGE, TYPE_MELEE_RANGED } from './CardType.constants';
import { CardTypeMelee, CardTypeRanged, CardTypeSiege, CardTypeMeleeRanged } from './CardType.style';

const getCardType = ({ type }) => {
  switch (type) {
    case TYPE_MELEE:
      return <CardTypeMelee />;
    case TYPE_RANGED:
      return <CardTypeRanged />;
    case TYPE_SIEGE:
      return <CardTypeSiege />;
    case TYPE_MELEE_RANGED:
      return <CardTypeMeleeRanged />;
    default:
      return;
  }
};

export { getCardType };
