import React from 'react';

import { CardDetailsContainer, CardDetailsBackground, CardDetailsDescription, CardDetailsSeparator, CardDetailsBanner } from './CardDetails.style';
import { CardPower } from '../CardPower';
import { CardPowerHero } from '../CardPowerHero';
import { CardEffect } from '../CardEffect';
import { CardType } from '../CardType';

const CardDetails = ({ reference, type, effect, value, name, description, hero, faction }) => (
  <CardDetailsContainer>
    <CardDetailsBackground reference={reference}/>
    {faction ? <CardDetailsBanner faction={faction} /> : '' }
    {hero ? (
      <CardPowerHero className="cardDetailsPowerHero" size='big' value={value}/>
    ) : (
      <CardPower className="cardDetailsPower" size='big' value={value}/>
    )}
    <CardType className="cardDetailsType" size='big' type={type}/>
    {effect ? <CardEffect className="cardDetailsEffect" size='big' effect={effect}/> : ''}
    <CardDetailsSeparator />
    <CardDetailsDescription>
      <h1>{name}</h1>
      <p>"{description}"</p>
    </CardDetailsDescription>
  </CardDetailsContainer>
);

export { CardDetails };
