import React from 'react';
import classnames from 'classnames';
import {NovaCompositionNavigationArrowDown as ArrowIcon} from '@coorpacademy/nova-icons';
import {propTypes, Props} from './types';
import styles from './style.css';

export const ICONS = {
  arrow: ArrowIcon
};

const ExpandableItem = ({icon, title, isExpended, isLink, content, onClick, image}: Props) => {
  const Icon = ICONS[icon];
  return (
    <div className={isExpended ? styles.expendedContainer : styles.container}>
      <div
        className={classnames(styles.header, isExpended ? styles.expendedHeader : null)}
        onClick={onClick}
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
      {isExpended ? (
        <div>
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
