import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map, noop, get} from 'lodash/fp';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const ListItem = (
  {
    buttonLink,
    secondButtonLink,
    bulletPointMenuButton,
    tags,
    title,
    selected,
    subtitle,
    dataColumns,
    order,
    'aria-label': ariaLabel,
    disabled = false,
    contentType,
    isBulkStyle = false,
    isOverflowHidden = false,
    onClick = noop
  },
  context
) => {
  const {skin} = context;
  const primarySkinColor = get('common.primary', skin);
  let isPublished = false;

  const selectedStyle = selected
    ? {
        backgroundColor: convert(`color(${primarySkinColor} a(0.07))`)
      }
    : {};

  const tagSelectedStyle = selected
    ? {
        backgroundColor: convert(`color(${primarySkinColor} a(0.15))`),
        color: primarySkinColor
      }
    : {};

  const tagsView = map.convert({cap: false})((tag, index) => {
    isPublished = tag.type === 'success';
    return (
      <div key={index} className={style.tag}>
        <Tag {...tag} customStyle={tagSelectedStyle} />
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
    <div
      className={classnames(
        style.wrapper,
        isBulkStyle && style.gridLayout,
        subtitle && style.withSubtitle,
        disabled && style.disabled
      )}
      onClick={!disabled && onClick}
      style={selectedStyle}
    >
      <div
        className={classnames(style.dataColumnsWrapper, isOverflowHidden && style.hiddenOverflowX)}
      >
        {isPublished && contentType === 'certification' ? orderView : null}
        <div className={style.title} title={title}>
          {title}
          <div className={style.subtitle}>{subtitle}</div>
        </div>
        {dataColumnsView}
      </div>

      <div className={style.settings}>
        {tagsView}
        {selected ? (
          <Icon
            iconName="circle-check"
            iconColor={primarySkinColor}
            backgroundColor={'#ffffff'}
            size={{
              faSize: 16,
              wrapperSize: 16
            }}
          />
        ) : null}
        {buttonLink ? <ButtonLink {...buttonLink} /> : null}
        {secondButtonLink ? <ButtonLink {...secondButtonLink} /> : null}
        {!isEmpty(bulletPointMenuButton) ? (
          <BulletPointMenuButton {...bulletPointMenuButton} />
        ) : null}
      </div>
    </div>
  );
};

ListItem.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  selected: PropTypes.bool,
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
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  isBulkStyle: PropTypes.bool,
  isOverflowHidden: PropTypes.bool,
  order: PropTypes.number,
  'aria-label': PropTypes.string,
  contentType: PropTypes.string,
  id: PropTypes.string
};

export default ListItem;
