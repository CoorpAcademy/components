import PropTypes from 'prop-types';
import ListItems from '../list-items';
import Title from '../../atom/title';
import InputText from '../../atom/input-text';
import InputTextarea from '../../atom/input-textarea';
import IconPreview from '../../molecule/icon-preview';
import {SelectOptionPropTypes} from '../../atom/select';
import {IconPreviewProps} from '../../molecule/icon-preview/types';

const FormPropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  select: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    'data-name': PropTypes.string,
    field: PropTypes.shape({
      options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes)),
      'aria-label': PropTypes.string,
      onChange: PropTypes.func
    })
  }),
  inputText: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.shape(InputText.propTypes)
  }),
  inputTextArea: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.shape(InputTextarea.propTypes)
  })
};

const IconEditorPropTypes = {
  title: PropTypes.string.isRequired,
  iconPreview: PropTypes.shape(IconPreview.propTypes).isRequired,
  inputText: PropTypes.shape(InputText.propTypes).isRequired,
  buttonLink: PropTypes.shape({
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    'data-name': PropTypes.string,
    onClick: PropTypes.func
  })
};

const translationProps = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  localesOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      ref: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ).isRequired,
  items: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onEditClick: PropTypes.func.isRequired,
      onDeleteClick: PropTypes.func.isRequired
    }).isRequired
  ).isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }).isRequired
});

const SkillEditionPropTypes = {
  skillInformations: PropTypes.shape({
    form: PropTypes.shape(FormPropTypes).isRequired,
    iconEditor: PropTypes.shape(IconEditorPropTypes).isRequired
  }).isRequired,
  translations: translationProps.isRequired,
  content: PropTypes.shape({
    title: PropTypes.shape(Title.propTypes).isRequired,
    listContent: PropTypes.shape(ListItems.propTypes).isRequired
  })
};

export default SkillEditionPropTypes;

type ContentProps = {
  title: PropTypes.InferProps<typeof Title.propTypes>;
  listContent: PropTypes.InferProps<typeof ListItems.propTypes>;
};

export type SelectOption = {
  name: string;
  value?: string | number;
  selected?: boolean;
  validOption?: boolean;
};

export type FieldSelectProps = {
  options: SelectOption[];
  'aria-label': string;
  onChange: () => void;
};

type FormProps = {
  title: string;
  subtitle: string;
  select: {
    title: string;
    subtitle: string;
    'data-name': string;
    field: FieldSelectProps;
  };
  inputText: {
    title: string;
    field: InputTextProps;
  };
  inputTextArea: {
    title: string;
    field: InputTextareaProps;
  };
};

type IconEditorProps = {
  title: string;
  iconPreview: IconPreviewProps;
  inputText: InputTextProps;
  buttonLink?: {label: string; ariaLabel: string; onClick: () => void};
};

export type SkillInformationsProps = {
  form: FormProps;
  iconEditor: IconEditorProps;
};

export const themeStyle = {
  setup: 'setup',
  coorpmanager: 'coorpmanager',
  cockpit: 'cockpit',
  default: 'defaultStyle'
};

export type TranslationPropsType = {
  title: string;
  subtitle: string;
  localesOptions: {
    label: string;
    ref: string;
    onClick: () => void;
  }[];
  items?: {
    [ref: string]: {
      title: string;
      onEditClick: () => void;
      onDeleteClick: () => void;
    };
  };
  button: {
    label: string;
    onClick: () => void;
  };
  emptyResult?: {
    title: string;
    description: string;
  };
};

export type SkillEditionPropsType = {
  skillInformations: SkillInformationsProps;
  translations: TranslationPropsType;
  content: ContentProps;
};

export type InputTextProps = {
  autoFocus?: boolean;
  title?: string;
  placeholder?: string;
  defaultValue?: string;
  theme?: keyof typeof themeStyle;
  disabled?: boolean;
  value?: string;
  hint?: string;
  error?: string;
  onChange?: (value: string) => void;
  description?: string;
  modified?: boolean;
  type?: string;
  valid?: boolean;
  'aria-label'?: string;
  'data-name'?: string;
  inputColor?: boolean;
};

export type InputTextareaProps = {
  placeholder?: string;
  title?: string;
  name?: string;
  theme?: keyof typeof themeStyle;
  disabled?: boolean;
  value?: string;
  hint?: string;
  error?: string;
  onChange?: (value: string) => void;
  description?: string;
  modified?: boolean;
  valid?: boolean;
};
