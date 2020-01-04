import React from 'react';
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';
import { CardType as CardTypeComponent } from '.';

const options = {
  Melee: 'type-melee',
  Ranged: 'type-ranged',
  Siege: 'type-siege',
  MeleeRanged: 'type-melee-ranged',
};

storiesOf('Card', module).add('Card Type', () => <CardTypeComponent type={radios('Type', options, 'type-melee')} />);
