import {AppReviewProps} from '../../prop-types';
import skills from '../../skills/test/fixtures/many-skills';

type Fixture = {
  props: AppReviewProps;
};

const fixture: Fixture = {
  props: {
    skills: skills.props,
    viewName: 'skills'
  }
};

export default fixture;
