import PropTypes from 'prop-types';
import BrandFormGroup from '../../molecule/brand-form-group';
import IconEditor from '../icon-editor';
import ListItems from '../list-items';

const SkillEditionPropTypes = {
  skillInformations: PropTypes.shape({
    form: PropTypes.shape(BrandFormGroup.propTypes).isRequired,
    iconEditor: PropTypes.shape(IconEditor.propTypes).isRequired
  }).isRequired,
  translations: PropTypes.shape(ListItems.propTypes).isRequired
};

export default SkillEditionPropTypes;

type SkillInformationsProps = {
  form: PropTypes.InferProps<typeof BrandFormGroup.propTypes>;
  iconEditor: PropTypes.InferProps<typeof IconEditor.propTypes>;
};

export type SkillEditionProps = {
  skillInformations: SkillInformationsProps;
  translations: PropTypes.InferProps<typeof ListItems.propTypes>;
};
