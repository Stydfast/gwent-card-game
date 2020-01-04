const getPowerBalance = ({ defaultValue, value }) => {
  switch (true) {
    case defaultValue > value:
      return 'lower';
    case defaultValue < value:
      return 'upper';
    default:
      return 'equal';
  }
};

const getColorFromValue = ({ powerBalance }) => {
  switch (powerBalance) {
    case 'upper':
      return '#388e3c';
    case 'lower':
      return '#d32f2f';
    default:
      return '#000';
  }
};

export { getPowerBalance, getColorFromValue };
