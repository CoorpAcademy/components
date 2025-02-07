import React, {useState} from 'react';
import classnames from 'classnames';
import {
  NovaCompositionNavigationArrowDown as ArrowIcon,
  NovaLinePhoneMobilePhone as MobilePhone,
  NovaLineMessagesChatChatBubbleCircleQuestionMark as ChatBubbleCircleQuestionMark,
  NovaLineNetworkNetworkAlert as NetworkAlert,
  NovaLineObjectsBinoculars as Binoculaire,
  NovaLineContentEditionContentBook as ContentBook
} from '@coorpacademy/nova-icons';
import {slice} from 'lodash/fp';
import {propTypes, Props} from './types';
import styles from './style.css';

const ICONS = {
  mobilePhone: MobilePhone,
  chatBubbleCircleQuestionMark: ChatBubbleCircleQuestionMark,
  networkAlert: NetworkAlert,
  binoculaire: Binoculaire,
  contentBook: ContentBook
};

const MenuLinks = ({
  items,
  title,
  showMoreItem,
  numberOfDisplayedItems,
  isDesktopMode,
  withScroll = false
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const itemsToDisplay = isDesktopMode || isOpen ? items : slice(0, numberOfDisplayedItems, items);
  const handleOnclickShowMore = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list} data-name="menu-links">
        {itemsToDisplay.map((item, index) => {
          const {handleOnclick} = item;
          const Icon = item.icon ? ICONS[item.icon] : null;
          const Item = (
            <div className={styles.flexContainer}>
              <span className={item.isSelected ? styles.selectedItem : undefined}>{item.text}</span>
              {Icon ? (
                <ArrowIcon
                  className={classnames(
                    styles.arrowIcon,
                    item.isSelected ? styles.selectedIcon : null
                  )}
                />
              ) : null}
            </div>
          );
          return (
            <li onClick={handleOnclick} key={`menu-link-item-${index}`} className={styles.item}>
              <div
                className={classnames(
                  styles.border,
                  item.isSelected ? styles.selectedBorder : null
                )}
              />
              <div className={styles.flexContainer}>
                {Icon ? (
                  <Icon
                    className={classnames(
                      styles.icon,
                      item.isSelected ? styles.selectedIcon : null
                    )}
                  />
                ) : null}
                <a
                  className={styles.link}
                  href={withScroll ? `#menu-link-item-${index}` : undefined}
                  aria-label={item.ariaLabel}
                >
                  {Item}
                </a>
              </div>
            </li>
          );
        })}
        {isDesktopMode ? null : (
          <li
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleOnclickShowMore}
            key={`menu-link-item-show-more`}
            className={classnames(styles.showMoreItem, styles.item)}
          >
            <div className={styles.border} />
            <span>
              {isOpen ? showMoreItem.showLessText : showMoreItem.showMoreText}
              <ArrowIcon className={isOpen ? styles.showLessIcon : styles.showMoreIcon} />
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

MenuLinks.propTypes = propTypes;

export default MenuLinks;
