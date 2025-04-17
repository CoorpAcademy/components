import PropTypes from 'prop-types';
import {IconPreviewProps} from '../../molecule/icon-preview/types';
import IconPreview from '../../molecule/icon-preview';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import {ButtonLinkProps} from '../../atom/button-link/types';

const IconEditorPropTypes = {
  iconPreview: PropTypes.shape(IconPreview.propTypes).isRequired,
  inputText: PropTypes.shape(InputText.propTypes).isRequired,
  buttonLink: PropTypes.shape(ButtonLink.propTypes)
};

export default IconEditorPropTypes;

export type IconEditorProps = {
  iconPreview: IconPreviewProps;
  inputText: React.ComponentProps<typeof InputText>;
  buttonLink?: ButtonLinkProps;
};
