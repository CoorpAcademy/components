import PropTypes from 'prop-types';
import ListItems from '../list-items';
import MultiFilterPanelPropTypes, {
  MultiFilterPanelProps
} from '../../molecule/multi-filter-panel/prop-types';

const ModalPropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

const ContentSkillModalPropTypes = {
  contentList: PropTypes.shape({
    ...ListItems.propTypes,
    selectAll: PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      onClick: PropTypes.func.isRequired
    })
  }).isRequired,
  filters: PropTypes.shape(MultiFilterPanelPropTypes).isRequired,
  modal: PropTypes.shape(ModalPropTypes).isRequired
};

export default ContentSkillModalPropTypes;

type ModalProps = {
  title?: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  disabled?: boolean;
  error?: string;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onClose: () => void;
};

export type ContentSkillModalProps = {
  contentList: React.ComponentProps<typeof ListItems> & {
    selectAll?: {
      label: string;
      disabled?: boolean;
      onClick: () => void;
    };
  };
  filters: MultiFilterPanelProps;
  modal: ModalProps;
};
