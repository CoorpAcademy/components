import PropTypes from 'prop-types';
import BrandFormGroup from '../../molecule/brand-form-group';
import TitleAndInput from '../title-and-input';

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
    onClick: PropTypes.func.isRequired
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
    form: PropTypes.shape(BrandFormGroup.propTypes).isRequired,
    iconEditor: PropTypes.shape(TitleAndInput.propTypes)
  }).isRequired,
  translations: translationPropTypes.isRequired,
  content: contentPropTypes.isRequired
};

export default SkillEditionPropTypes;

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
};

export type ContentPropsType = {
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
};

export type SkillEditionPropsType = {
  skillInformations: SkillInformationsProps;
  translations: TranslationPropsType;
  content: ContentPropsType;
};
