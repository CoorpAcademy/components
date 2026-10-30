import PropTypes from 'prop-types';
import InputText from '../../atom/input-text';
import InputDate from '../../atom/input-date';
import InputSwitch from '../../atom/input-switch';
import {propTypes as radioPropTypes, RadioWithTitleProps} from '../../atom/radio-with-title/types';
import AssignmentAudiencePropTypes, {AssignmentAudienceProps} from '../assignment-audience/types';
import {ContentPropsType, ContentSelectionListPropTypes} from '../content-selection-list/types';

type TextField = Partial<Omit<PropTypes.InferProps<typeof InputText.propTypes>, 'onChange'>> & {
  type?: 'text';
  onChange: (value: string) => void;
};
type DateField = Partial<Omit<PropTypes.InferProps<typeof InputDate.propTypes>, 'onChange'>> & {
  type?: 'date';
  onChange: (value: string) => void;
};
type ReminderSwitch = Partial<
  Omit<PropTypes.InferProps<typeof InputSwitch.propTypes>, 'onChange'>
> & {
  onChange: (value: boolean) => void;
};
type RuleOption = Omit<RadioWithTitleProps, 'title' | 'aria-label' | 'checked'> & {
  title: {title: string; subtitle?: string};
  checked?: boolean;
  'aria-label'?: string;
};

export type AssignmentEditionProps = {
  information: {
    title: string;
    subtitle?: string;
    error?: string;
    field: TextField;
  };
  audience: AssignmentAudienceProps;
  contents: ContentPropsType;
  dates: {
    title: string;
    error?: string;
    fields: DateField[];
    rule: {
      title: string;
      hint?: string;
      disabled?: boolean;
      options: RuleOption[];
    };
    reminders: {hint: string; switches: ReminderSwitch[]};
  };
  busy?: boolean;
  isFetching?: boolean;
  focusSection?: 'information' | 'audience' | 'contents' | 'dates';
};
export type AssignmentEditionPropsFixture = {props: AssignmentEditionProps};

export const propTypes = {
  information: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    error: PropTypes.string,
    field: PropTypes.shape({
      ...InputText.propTypes,
      type: PropTypes.oneOf(['text']),
      onChange: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  audience: PropTypes.shape(AssignmentAudiencePropTypes).isRequired,
  contents: PropTypes.shape(ContentSelectionListPropTypes).isRequired,
  dates: PropTypes.shape({
    title: PropTypes.string.isRequired,
    error: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        ...InputDate.propTypes,
        type: PropTypes.oneOf(['date']),
        onChange: PropTypes.func.isRequired
      }).isRequired
    ).isRequired,
    rule: PropTypes.shape({
      title: PropTypes.string.isRequired,
      hint: PropTypes.string,
      disabled: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          ...radioPropTypes,
          title: PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired,
    reminders: PropTypes.shape({
      hint: PropTypes.string.isRequired,
      switches: PropTypes.arrayOf(
        PropTypes.shape({
          ...InputSwitch.propTypes,
          onChange: PropTypes.func.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  }).isRequired,
  busy: PropTypes.bool,
  isFetching: PropTypes.bool,
  focusSection: PropTypes.oneOf(['information', 'audience', 'contents', 'dates'])
};
