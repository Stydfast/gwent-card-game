import React from 'react';
import { CardDetails } from '../CardDetails';
import { CardSelectedContainer } from './CardSelected.style';

const CardSelected = ({reference, type, effect, value, name, description, hero, faction}) => (
  <CardSelectedContainer>
    <CardDetails reference={reference} type={type} effect={effect} value={value} name={name} description={description} hero={hero} faction={faction} />
  </CardSelectedContainer>
);

export { CardSelected };
