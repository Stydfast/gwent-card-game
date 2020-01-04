import { getPowerBalance, getColorFromValue } from './CardPower.helper';

describe('getPowerBalance', () => {
  const props = {
    defaultValue: 5,
  };

  test('Upper value', () => {
    props.value = 8;
    expect(getPowerBalance(props)).toEqual('upper');
  });

  test('Lower value', () => {
    props.value = 3;
    expect(getPowerBalance(props)).toEqual('lower');
  });

  test('Equal value', () => {
    props.value = 5;
    expect(getPowerBalance(props)).toEqual('equal');
  });
});

describe('getColorFromValue', () => {
  const props = {};

  test('Green', () => {
    props.powerBalance = 'upper';
    expect(getColorFromValue(props)).toEqual('#388e3c');
  });

  test('Red', () => {
    props.powerBalance = 'lower';
    expect(getColorFromValue(props)).toEqual('#d32f2f');
  });

  test('Black', () => {
    props.powerBalance = 'equal';
    expect(getColorFromValue(props)).toEqual('#000');
  });
});
