import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string,
  numberOfDisplayedItems: PropTypes.number,
  isDesktopMode: PropTypes.bool,
  withScroll: PropTypes.bool,
  showMoreItem: PropTypes.shape({
    showMoreText: PropTypes.string,
    showLessText: PropTypes.string,
    isSelected: PropTypes.bool
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isSelected: PropTypes.bool,
      handleOnclick: PropTypes.func,
      ariaLabel: PropTypes.string
    })
  )
};

export type Item = {
  text: string;
  isSelected?: boolean;
  ariaLabel?: string;
  handleOnclick: () => void;
  icon?: IconsType;
};

export type ShowMoreItem = {
  showMoreText: string;
  showLessText: string;
};

export type IconsType =
  | 'mobilePhone'
  | 'chatBubbleCircleQuestionMark'
  | 'networkAlert'
  | 'binoculaire'
  | 'contentBook';

export type Props = {
  title: string;
  isDesktopMode: boolean;
  withScroll?: boolean;
  showMoreItem: ShowMoreItem;
  numberOfDisplayedItems: number;
  items: Item[];
};
