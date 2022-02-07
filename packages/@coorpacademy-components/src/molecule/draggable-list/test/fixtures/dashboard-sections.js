import Boutique from '../../../setup-section/test/fixtures/analytics-boutique';
import Branch from '../../../setup-section/test/fixtures/analytics-branch';
import Region from '../../../setup-section/test/fixtures/analytics-region';

const {props: boutique} = Boutique;
const {props: branch} = Branch;
const {props: region} = Region;

export default {
  props: {
    itemType: 'setup-section',
    items: [boutique, branch, region],
    onDrop: (dragged, dropped) => {
      console.log('foo');
      console.log({dragged, dropped});
    }
  }
};
