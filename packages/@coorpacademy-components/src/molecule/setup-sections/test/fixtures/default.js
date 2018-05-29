import Section from '../../../setup-section/test/fixtures/default';
import SectionFirst from '../../../setup-section/test/fixtures/first';
import SectionOther from '../../../setup-section/test/fixtures/other';
import NoContentTypes from '../../../setup-section/test/fixtures/no-content-types';

const {props} = Section;
const propsFirst = SectionFirst.props;
const propsOther = SectionOther.props;
const {props: noContentTypes} = NoContentTypes;

export default {
  props: {
    sections: [propsFirst, props, propsOther, noContentTypes]
  }
};
