import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    previewImage: 'https://www.coorpacademy.com/assets/img/logo.svg',
    modified: true
  })
};
