import React from 'react';
import { getCardType } from './CardType.utils';
import { CardTypeMelee, CardTypeRanged, CardTypeSiege, CardTypeMeleeRanged } from './CardType.style';

describe('getCardType', () => {
  const props = {};

  test('Melee', () => {
    props.type = 'melee';
    expect(getCardType(props)).toEqual(<CardTypeMelee />);
  });

  test('Ranged', () => {
    props.type = 'ranged';
    expect(getCardType(props)).toEqual(<CardTypeRanged />);
  });

  test('Siege', () => {
    props.type = 'siege';
    expect(getCardType(props)).toEqual(<CardTypeSiege />);
  });

  test('MeleeRanged', () => {
    props.type = 'melee-ranged';
    expect(getCardType(props)).toEqual(<CardTypeMeleeRanged />);
  });

  test('Invalid value', () => {
    props.type = 'undefined';
    expect(getCardType(props)).toBeNull;
  });
});
