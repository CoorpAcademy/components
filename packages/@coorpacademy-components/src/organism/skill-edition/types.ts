import PropTypes from 'prop-types';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import Title from '../../atom/title';
import TitleAndInput from '../title-and-input';

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
    form: PropTypes.shape(BrandFormGroup.propTypes).isRequired,
    iconEditor: PropTypes.shape(TitleAndInput.propTypes)
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

type SkillInformationsProps = {
  form: PropTypes.InferProps<typeof BrandFormGroup.propTypes>;
  iconEditor: PropTypes.InferProps<typeof TitleAndInput.propTypes>;
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
