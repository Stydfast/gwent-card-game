import React from 'react';
import { getCardEffect } from './CardEffect.utils';
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

describe('getCardEffect', () => {
  const props = {};

  test('Agile', () => {
    props.effect = 'effect-agile';
    expect(getCardEffect(props)).toEqual(<CardEffectAgile />);
  });

  test('Clone', () => {
    props.effect = 'effect-clone';
    expect(getCardEffect(props)).toEqual(<CardEffectClone />);
  });

  test('Improve', () => {
    props.effect = 'effect-improve';
    expect(getCardEffect(props)).toEqual(<CardEffectImprove />);
  });

  test('Muster', () => {
    props.effect = 'effect-muster';
    expect(getCardEffect(props)).toEqual(<CardEffectMuster />);
  });

  test('Nurse', () => {
    props.effect = 'effect-nurse';
    expect(getCardEffect(props)).toEqual(<CardEffectNurse />);
  });

  test('Scorch', () => {
    props.effect = 'effect-scorch';
    expect(getCardEffect(props)).toEqual(<CardEffectScorch />);
  });

  test('Spy', () => {
    props.effect = 'effect-spy';
    expect(getCardEffect(props)).toEqual(<CardEffectSpy />);
  });

  test('Warhorn', () => {
    props.effect = 'effect-warhorn';
    expect(getCardEffect(props)).toEqual(<CardEffectWarhorn />);
  });

  test('Invalid value', () => {
    props.effect = 'effect-undefined';
    expect(getCardEffect(props)).toBeNull;
  });
});
