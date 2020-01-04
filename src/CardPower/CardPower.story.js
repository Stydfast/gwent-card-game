import React from 'react';
import { number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { CardPower } from '.';

const options = {
  range: true,
  min: 1,
  max: 50,
  step: 1,
};

storiesOf('Card', module).add('Card Power', () => (
  <CardPower defaultValue={number('Default power', 5, options)} value={number('Power', 5, options)} />
));
