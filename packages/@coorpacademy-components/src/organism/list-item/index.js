import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map} from 'lodash/fp';
import classnames from 'classnames';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const ListItem = ({
  buttonLink,
  secondButtonLink,
  bulletPointMenuButton,
  tags,
  title,
  dataColumns,
  order,
  'aria-label': ariaLabel,
  contentType,
  isBulkStyle = false,
  isOverflowHidden = false
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
      <div
        className={classnames(style.dataColumnsWrapper, isOverflowHidden && style.hiddenOverflowX)}
      >
        {isPublished && contentType === 'certification' ? orderView : null}
        <div className={style.title} title={title}>
          {title}
        </div>
        {dataColumnsView}
      </div>

      <div className={style.settings}>
        {tagsView}
        {buttonLink ? <ButtonLink {...buttonLink} /> : null}
        {secondButtonLink ? <ButtonLink {...secondButtonLink} /> : null}
        {!isEmpty(bulletPointMenuButton) ? (
          <BulletPointMenuButton {...bulletPointMenuButton} />
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
  secondButtonLink: PropTypes.shape({
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
  isOverflowHidden: PropTypes.bool,
  order: PropTypes.number,
  'aria-label': PropTypes.string,
  contentType: PropTypes.string,
  id: PropTypes.string
};

export default ListItem;
