import React from 'react';
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';
import { CardType } from '.';

const options = {
  Melee: 'melee',
  Ranged: 'ranged',
  Siege: 'siege',
  MeleeRanged: 'melee-ranged',
};

storiesOf('Card', module).add('Card Type', () => <CardType type={radios('Type', options, 'melee')} />);
