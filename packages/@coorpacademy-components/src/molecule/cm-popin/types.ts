import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import ButtonLink from '../../atom/button-link';
import InputSwitch from '../../atom/input-switch';
import Title from '../../atom/title';
import Link from '../../atom/link';
import {TitleProps} from '../../atom/title/types';
import CardsGrid from '../../organism/cards-grid';
import ListItems from '../../organism/list-items';
import {ICONS} from '../../util/button-icons';
import {iconPropTypes} from '../../atom/icon';

const propTypes = {
  content: PropTypes.string,
  mode: PropTypes.oneOf(['alert', 'information', 'cookie', 'items', 'list']),
  header: PropTypes.shape({
    title: PropTypes.shape(Title.propTypes),
    headerIcon: PropTypes.string,
    backgroundImage: PropTypes.string
  }),
  firstButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary', 'tertiary']),
    customStyle: ButtonLink.propTypes.customStyle
  }),
  secondButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    customStyle: ButtonLink.propTypes.customStyle,
    icon: PropTypes.shape({
      position: PropTypes.oneOf(['right', 'left']),
      type: PropTypes.oneOf(keys(ICONS))
    })
  }),
  thirdButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    customStyle: ButtonLink.propTypes.customStyle
  }),
  onClose: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.shape(iconPropTypes)]),
  backgroundImageUrl: PropTypes.string,
  descriptionText: PropTypes.string,
  cookieTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
  descriptionBtnTxt: PropTypes.string,
  listBtnSwicth: PropTypes.arrayOf(PropTypes.shape(InputSwitch.propTypes)),
  items: PropTypes.shape({
    type: PropTypes.oneOf(['content', 'list']),
    list: PropTypes.oneOfType([
      PropTypes.shape(CardsGrid.propTypes),
      PropTypes.shape(ListItems.propTypes)
    ])
  }),
  link: PropTypes.shape(Link.propTypes)
};

type PopinHeaderProps = {
  title: TitleProps;
  backgroundImage: string;
  headerIcon: string;
};

export type QuitPopinButton = {
  'aria-label'?: string;
  label: string;
  type: string;
  customStyle?: {
    backgroundColor?: string;
    color?: string;
  };
  handleOnclick: () => void;
};

export type CMPopinProps = {
  content: string;
  icon: string | PropTypes.InferProps<typeof iconPropTypes>;
  mode: 'alert' | 'information' | 'cookie' | 'items' | 'list';
  onClose?: () => void;
  popinHeader?: PopinHeaderProps;
  descriptionText: string;
  firstButton?: QuitPopinButton;
  secondButton?: QuitPopinButton;
  items?: {
    type: 'content' | 'list';
    list:
      | PropTypes.InferProps<typeof CardsGrid.propTypes>
      | PropTypes.InferProps<typeof ListItems.propTypes>;
  };
  link?: PropTypes.InferProps<typeof Link.propTypes>;
};

export default propTypes;
