import {BulletPointMenuButtonPropsFixture} from '../../types';
import menuWithIconFixture from '../../../../atom/button-menu/test/fixtures/menu-with-icon';

const buttonsWithIconFixture: BulletPointMenuButtonPropsFixture = {
  props: {
    ...menuWithIconFixture.props,
    onClick: () => console.log('click on bullet point menu')
  }
};

export default buttonsWithIconFixture;
