import defaultsDeep from 'lodash/fp/defaultsDeep';
import {
  actionButtonProps,
  deleteButtonProps
} from '../../../../atom/button-menu/test/fixtures/default';
import {disabledButtonProps} from '../../../../atom/button-menu/test/fixtures/multiple-buttons';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    buttons: [actionButtonProps, disabledButtonProps, deleteButtonProps]
  })
};
