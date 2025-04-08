import React from 'react';
import classnames from 'classnames';
import {NovaCompositionNavigationArrowDown as ArrowIcon} from '@coorpacademy/nova-icons';
import {propTypes, Props} from './types';
import styles from './style.css';

export const ICONS = {
  arrow: ArrowIcon
};

const ExpandableItem = ({
  icon,
  title,
  isExpended,
  isLink,
  content,
  onClick,
  image,
  ariaLabel
}: Props) => {
  const Icon = ICONS[icon];
  return (
    <div className={isExpended ? styles.expendedContainer : styles.container}>
      {isLink ? (
        <a
          className={classnames(styles.header, isExpended ? styles.expendedHeader : null)}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          <h3 className={styles.title}>{title}</h3>
          {Icon ? (
            <Icon
              className={classnames(
                styles.icon,
                isExpended ? styles.expendedIcon : null,
                isLink ? styles.linkIcon : null
              )}
            />
          ) : null}
        </a>
      ) : (
        <div
          className={classnames(styles.header, isExpended ? styles.expendedHeader : null)}
          onClick={onClick}
          id={`${title}_expended_item_id`}
          aria-controls={`${title}_expended_item_aria-controls`}
          aria-expanded={isExpended}
        >
          <h3 className={styles.title}>{title}</h3>
          {Icon ? (
            <Icon
              className={classnames(
                styles.icon,
                isExpended ? styles.expendedIcon : null,
                isLink ? styles.linkIcon : null
              )}
            />
          ) : null}
        </div>
      )}
      {isExpended ? (
        <div
          id={`${title}_expended_item_aria-controls`}
          role="region"
          aria-labelledby={`${title}_expended_item_id`}
        >
          <div
            className={styles.content} // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: content}}
          />
          {image ? <img className={styles.image} src={image} alt={''} /> : null}
        </div>
      ) : null}
    </div>
  );
};

ExpandableItem.propTypes = propTypes;
export default ExpandableItem;
