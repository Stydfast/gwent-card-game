import React from 'react';
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';
import { CardType } from '.';

const options = {
  Melee: 'type-melee',
  Ranged: 'type-ranged',
  Siege: 'type-siege',
  MeleeRanged: 'type-melee-ranged',
};

storiesOf('Card', module).add('Card Type', () => <CardType type={radios('Type', options, 'type-melee')} />);
