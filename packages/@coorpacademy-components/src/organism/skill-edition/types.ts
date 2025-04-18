import PropTypes from 'prop-types';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import Title from '../../atom/title';
import TitleAndInput from '../title-and-input';

const SkillEditionPropTypes = {
  skillInformations: PropTypes.shape({
    form: PropTypes.shape(BrandFormGroup.propTypes).isRequired,
    iconEditor: PropTypes.shape(TitleAndInput.propTypes)
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

type SkillInformationsProps = {
  form: PropTypes.InferProps<typeof BrandFormGroup.propTypes>;
  iconEditor: PropTypes.InferProps<typeof TitleAndInput.propTypes>;
};

export type SkillEditionProps = {
  skillInformations: SkillInformationsProps;
  translations: PropTypes.InferProps<typeof ListItems.propTypes>;
  content: ContentProps;
};
