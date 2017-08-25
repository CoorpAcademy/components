import '@storybook/addons';
import '@storybook/addon-knobs/register';
import './addons/dependencies/register';
import register from 'brandai-storybook';

register({
  dataUrl:
    'https://assets.brand.ai/plop/primary-brand/style-data.json?exportFormat=list&key=S11y456_W'
});
