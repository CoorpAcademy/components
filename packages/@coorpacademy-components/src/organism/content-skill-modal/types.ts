import PropTypes from 'prop-types';
import ListItems from '../list-items';
import MultiFilterPanelPropTypes, {
  MultiFilterPanelProps
} from '../../molecule/multi-filter-panel/prop-types';

const ModalPropTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

const ContentSkillModalPropTypes = {
  contentList: PropTypes.shape(ListItems.propTypes).isRequired,
  filters: PropTypes.shape(MultiFilterPanelPropTypes).isRequired,
  modal: PropTypes.shape(ModalPropTypes).isRequired
};

export default ContentSkillModalPropTypes;

type ModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onClose: () => void;
};

export type ContentSkillModalProps = {
  contentList: React.ComponentProps<typeof ListItems>;
  filters: MultiFilterPanelProps;
  modal: ModalProps;
};
