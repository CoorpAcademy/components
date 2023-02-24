import defaultsDeep from 'lodash/fp/defaultsDeep';
import {
  actionButtonProps,
  deleteButtonProps
} from '../../../../atom/button-menu/test/fixtures/default';
import {disabledButtonProps} from '../../../../atom/button-menu/test/fixtures/multiple-buttons';
import {BulletPointMenuButtonPropsFixture} from '../../types';
import Default from './default';

const {props} = Default;

const defaultFixture: BulletPointMenuButtonPropsFixture = {
  props: defaultsDeep(props, {
    buttons: [actionButtonProps, disabledButtonProps, deleteButtonProps]
  })
};

export default defaultFixture;
