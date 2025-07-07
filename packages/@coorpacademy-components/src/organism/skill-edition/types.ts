import PropTypes from 'prop-types';
import InputText from '../../atom/input-text';
import InputTextarea from '../../atom/input-textarea';
import IconPreview from '../../molecule/icon-preview';
import {SelectOptionPropTypes} from '../../atom/select';
import {IconPreviewProps} from '../../molecule/icon-preview/types';
import {ButtonLinkProps} from '../../atom/button-link/types';

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

const translationPropTypes = PropTypes.shape({
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
  ),
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }).isRequired
});

const contentPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }).isRequired,
  list: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        ref: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        tags: PropTypes.shape({
          label: PropTypes.string.isRequired,
          iconName: PropTypes.string.isRequired
        }).isRequired,
        checkbox: PropTypes.shape({
          checked: PropTypes.bool.isRequired,
          onChange: PropTypes.func.isRequired
        }).isRequired
      }).isRequired
    ),
    search: PropTypes.shape({
      value: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
    }).isRequired,
    emptyResult: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    checkbox: PropTypes.shape({
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired
    })
  }).isRequired
});

const SkillEditionPropTypes = {
  skillInformations: PropTypes.shape({
    form: PropTypes.shape(FormPropTypes).isRequired,
    iconEditor: PropTypes.shape(IconEditorPropTypes).isRequired
  }).isRequired,
  translations: translationPropTypes.isRequired,
  content: contentPropTypes.isRequired,
  isFetching: PropTypes.bool
};

export default SkillEditionPropTypes;

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
    onClick?: () => void;
    disabled?: boolean;
  };
  emptyResult?: {
    title: string;
    description: string;
  };
};

export type ContentListItemType = {
  ref: string;
  title: string;
  subtitle: string;
  image: string;
  tags: {
    label: string;
    iconName: string;
  };
  checkbox: {
    checked: boolean;
    onChange: (value: boolean) => void;
  };
  deleteButton?: ButtonLinkProps;
};

export type CheckboxWithTitleProps = {
  title?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
};

export type ContentPropsType = {
  readonly?: boolean;
  title: string;
  subtitle: string;
  button: {
    label: string;
    onClick: () => void;
  };
  list: {
    title?: string;
    items?: ContentListItemType[];
    search: {
      value: string;
      placeholder: string;
      onChange: (value: string) => void;
    };
    emptyResult?: {
      title: string;
      description: string;
    };
    checkbox?: {
      title: string;
      checked: boolean;
      onChange: (value: boolean) => void;
    };
  };
  actionButtons?: ButtonLinkProps[];
  checkboxWithTitle?: CheckboxWithTitleProps;
};

export type SkillEditionPropsType = {
  skillInformations: SkillInformationsProps;
  translations: TranslationPropsType;
  content: ContentPropsType;
  isFetching?: boolean;
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
