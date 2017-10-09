import '@storybook/addons';
import '@storybook/addon-knobs/register';
import './addons/dependencies/register';
import register from 'brandai-storybook';

register({
  dataUrl:
    'https://assets.brand.ai/coorpacademy/primary-brand/style-data.json?exportFormat=list&key=HJ8hr83Ob'
});
