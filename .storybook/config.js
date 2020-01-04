import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs }  from '@storybook/addon-knobs';

addDecorator(withInfo({ inline: true}));
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.story\.js$/), module);
