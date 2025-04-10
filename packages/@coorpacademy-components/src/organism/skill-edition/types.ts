import PropTypes from 'prop-types';
import ListItems from '../list-items';
import Title from '../../atom/title';
import InputText from '../../atom/input-text';
import IconPreview from '../../molecule/icon-preview';
import {SelectOptionPropTypes} from '../../atom/select';

const FieldPropTypes = {
  title: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

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
    field: PropTypes.shape(FieldPropTypes)
  }),
  inputTextArea: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.shape(FieldPropTypes)
  })
};

const IconEditorPropTypes = {
  title: PropTypes.string,
  iconPreview: PropTypes.shape(IconPreview.propTypes),
  inputText: PropTypes.shape(InputText.propTypes),
  buttonLink: PropTypes.shape({
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    'data-name': PropTypes.string,
    onClick: PropTypes.func
  })
};

const SkillEditionPropTypes = {
  skillInformations: PropTypes.shape({
    form: PropTypes.shape(FormPropTypes).isRequired,
    iconEditor: PropTypes.shape(IconEditorPropTypes).isRequired
  }).isRequired,
  translations: PropTypes.shape(ListItems.propTypes).isRequired,
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

export type FieldInputProps = {
  title: string;
  placeholder: string;
  hint: string;
  value: string;
  onChange: () => void;
};

export type FieldSelectProps = {
  options: PropTypes.InferProps<typeof SelectOptionPropTypes>[];
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
    field: FieldInputProps;
  };
  inputTextArea: {
    title: string;
    field: FieldInputProps;
  };
};

type IconEditorProps = {
  title: string;
  iconPreview: PropTypes.InferProps<typeof IconPreview.propTypes>;
  inputText: PropTypes.InferProps<typeof InputText.propTypes>;
  buttonLink: {label: string; ariaLabel: string; 'data-name': string; onClick: () => void};
};

type SkillInformationsProps = {
  form: FormProps;
  iconEditor: IconEditorProps;
};

export type SkillEditionProps = {
  skillInformations: SkillInformationsProps;
  translations: PropTypes.InferProps<typeof ListItems.propTypes>;
  content: ContentProps;
};
