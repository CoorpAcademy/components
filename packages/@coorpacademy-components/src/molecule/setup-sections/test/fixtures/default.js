import Section from '../../../setup-section/test/fixtures/default';
import SectionFirst from '../../../setup-section/test/fixtures/first';
import SectionOther from '../../../setup-section/test/fixtures/other';

const {props} = Section;
const propsFirst = SectionFirst.props;
const propsOther = SectionOther.props;

export default {
  props: {
    sections: [propsFirst, props, propsOther]
  }
};
