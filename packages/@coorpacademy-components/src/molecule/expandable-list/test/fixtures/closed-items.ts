import notExpended from '../../../expandable-item/test/fixtures/default';
import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    items: [
      {
        title: 'Qu’est-ce que Coorpacademy ?',
        icon: 'arrow',
        isExpended: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props,
      notExpended.props
    ]
  }
};
export default fixture;
