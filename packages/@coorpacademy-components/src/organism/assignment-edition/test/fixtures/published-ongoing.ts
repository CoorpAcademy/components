import {AssignmentEditionPropsFixture} from '../../types';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {
    ...filled.props,
    dates: {
      ...filled.props.dates,
      fields: filled.props.dates.fields.map((field, index) =>
        index === 0
          ? {
              ...field,
              disabled: true,
              hint: 'The start date cannot change after the assignment starts.'
            }
          : field
      ),
      rule: {
        ...filled.props.dates.rule,
        disabled: true,
        hint: 'The completion rule cannot change after the assignment starts.'
      }
    }
  }
};
export default fixture;
