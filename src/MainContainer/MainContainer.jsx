import React from 'react';
import { Board } from '../Board';
import { Card } from '../Card';

const MainContainer = () => (
  <Board>
    <Card reference="nor-dijkstra" effect="spy" type="melee" defaultValue={4} value={4} />
    <Card reference="neu-geralt" type="melee" defaultValue={15} value={15} hero />
    <Card reference="neu-triss" type="melee" defaultValue={7} value={7} hero />
    <Card reference="neu-yennefer" type="ranged" effect="nurse" defaultValue={7} value={7} hero />
    <Card reference="nil-fringilla" type="ranged" defaultValue={6} value={8} />
    <Card reference="nor-catapult-1" type="siege" effect="clone" defaultValue={8} value={7} />
    <Card reference="neu-dandelion" type="melee" effect="warhorn" defaultValue={2} value={2} />
  </Board>
);

export { MainContainer };
