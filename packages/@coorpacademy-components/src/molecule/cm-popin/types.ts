import PropTypes from 'prop-types';
import Cta from '../../atom/button-link';
import InputSwitch from '../../atom/input-switch';
import Title from '../../atom/title';
import {TitleProps} from '../../atom/title/types';
import CardsGrid from '../../organism/cards-grid';
import ListItems from '../../organism/list-items';

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
    customStyle: Cta.propTypes.customStyle
  }),
  secondButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    customStyle: Cta.propTypes.customStyle
  }),
  thirdButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    customStyle: Cta.propTypes.customStyle
  }),
  onClose: PropTypes.func,
  icon: PropTypes.string,
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
  })
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
  icon: string;
  mode: 'alert' | 'information' | 'cookie' | 'items' | 'list';
  onClose: () => void;
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
};

export default propTypes;
