import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map} from 'lodash/fp';
import classnames from 'classnames';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const ListItem = ({
  buttonLink,
  buttonLinkIcon,
  bulletPointMenuButton,
  tags,
  title,
  dataColumns,
  order,
  'aria-label': ariaLabel,
  contentType,
  isBulkStyle = false
}) => {
  let isPublished = false;

  const tagsView = map.convert({cap: false})((tag, index) => {
    isPublished = tag.type === 'success';
    return (
      <div key={index} className={style.tag}>
        <Tag {...tag} />
      </div>
    );
  })(tags);

  const dataColumnsView = map.convert({cap: false})((dataColumn, index) => {
    return (
      <div key={index} className={style[dataColumn.className]}>
        {dataColumn.type ? <Tag {...dataColumn} /> : dataColumn.label}
      </div>
    );
  })(dataColumns);

  const orderView =
    order !== null && order !== undefined ? (
      <div className={style.order} aria-label={ariaLabel}>
        {order + 1}
      </div>
    ) : null;

  return (
    <div className={classnames(style.wrapper, isBulkStyle && style.gridLayout)}>
      <div className={style.dataColumnsWrapper}>
        {isPublished && contentType === 'certification' ? orderView : null}
        <div className={style.title} title={title}>
          {title}
        </div>
        {dataColumnsView}
      </div>

      <div className={style.settings}>
        {tagsView}
        {buttonLink ? (
          <div className={style.buttonLink}>
            <ButtonLink {...buttonLink} />
          </div>
        ) : null}
        {buttonLinkIcon ? (
          <div className={style.buttonLink}>
            <ButtonLinkIconOnly {...buttonLinkIcon} />
          </div>
        ) : null}
        {!isEmpty(bulletPointMenuButton) ? (
          <div className={style.bulletPoint}>
            <BulletPointMenuButton {...bulletPointMenuButton} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  dataColumns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.oneOf(['success', 'failure', 'warning', 'progress', 'default']),
      className: PropTypes.oneOf(['cell', 'title'])
    })
  ),
  buttonLink: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    dataName: PropTypes.string,
    icon: PropTypes.shape({
      position: PropTypes.string,
      type: PropTypes.string
    }),
    onClick: PropTypes.func
  }),
  buttonLinkIcon: PropTypes.shape({
    size: PropTypes.oneOf(['default', 'small', 'responsive']),
    'aria-label': PropTypes.string,
    'data-name': PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    link: PropTypes.shape({
      href: PropTypes.string,
      download: PropTypes.bool,
      target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
    }),
    disabled: PropTypes.bool,
    className: PropTypes.string
  }),
  bulletPointMenuButton: PropTypes.shape({
    buttonAriaLabel: PropTypes.string,
    menuAriaLabel: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        'data-name': PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    onClick: PropTypes.func
  }),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.oneOf(['success', 'failure', 'warning', 'progress', 'default'])
    })
  ),
  isBulkStyle: PropTypes.bool,
  order: PropTypes.number,
  'aria-label': PropTypes.string,
  contentType: PropTypes.string,
  id: PropTypes.string
};

export default ListItem;
