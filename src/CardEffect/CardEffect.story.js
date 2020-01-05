import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { CardEffect } from './CardEffect';

const options = {
  Agile: 'agile',
  Clone: 'clone',
  Improve: 'improve',
  Muster: 'muster',
  Nurse: 'nurse',
  Scorch: 'scorch',
  Spy: 'spy',
  Warhorn: 'warhorn',
};

storiesOf('Card', module).add('Card Effect', () => <CardEffect effect={select('Effect', options, 'agile')} />);
