import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map, noop, get} from 'lodash/fp';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import FaIcon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const ListItem = (
  {
    buttonLink,
    secondButtonLink,
    bulletPointMenuButton,
    tags,
    title,
    provider,
    selected,
    selectedColor,
    subtitle,
    dataColumns,
    order,
    'aria-label': ariaLabel,
    disabled = false,
    contentType,
    isBulkStyle = false,
    isOverflowHidden = false,
    onClick = noop,
    leftIcon
  },
  context
) => {
  const {skin} = context;
  const primarySelectedColor = selectedColor || get('common.primary', skin);
  const mapUncapped = map.convert({cap: false});
  let isPublished = false;

  const selectedStyle = selected
    ? {
        backgroundColor: convert(`color(${primarySelectedColor} a(0.07))`)
      }
    : {};

  const tagSelectedStyle = selected
    ? {
        backgroundColor: convert(`color(${primarySelectedColor} a(0.15))`),
        color: primarySelectedColor
      }
    : {};

  const tagsView = mapUncapped((tag, index) => {
    isPublished = tag.type === 'success';
    return (
      <div key={index} className={style.tag}>
        <Tag {...tag} customStyle={tagSelectedStyle} />
      </div>
    );
  })(tags);

  const dataColumnsView = mapUncapped((dataColumn, index) => {
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
        disabled && style.disabled,
        onClick !== noop && !disabled && style.cursorPointer
      )}
      onClick={disabled ? undefined : onClick}
      style={selectedStyle}
    >
      <div
        className={classnames(style.dataColumnsWrapper, isOverflowHidden && style.hiddenOverflowX)}
      >
        {isPublished && contentType === 'certification' ? orderView : null}
        <div className={style.leftSection}>
          {leftIcon ? (
            <div>
              <FaIcon
                iconName={leftIcon.iconName}
                gradientBackground={leftIcon.gradientBackground || true}
                iconColor={leftIcon.iconColor || primarySelectedColor}
                preset={leftIcon.preset || 'xl'}
                borderRadius={leftIcon.borderRadius || '25%'}
              />
            </div>
          ) : null}
        </div>
        <div className={style.titleWrapper}>
          <div className={style.titleProviderWrapper}>
            <div className={style.title} title={title}>
              {title}
            </div>
            {provider ? (
              <Tag label={provider} type="default" className={style.providerTag} />
            ) : null}
          </div>
          {subtitle ? <div className={style.subtitle}>{subtitle}</div> : null}
        </div>
        {dataColumnsView}
      </div>

      <div className={style.settings}>
        {tagsView}
        {selected ? (
          <FaIcon
            iconName="circle-check"
            iconColor={primarySelectedColor}
            backgroundColor={COLORS.white}
            size={{faSize: 16, wrapperSize: 16}}
          />
        ) : null}
        {buttonLink ? <ButtonLink {...buttonLink} /> : null}
        {secondButtonLink ? <ButtonLink {...secondButtonLink} /> : null}
        {isEmpty(bulletPointMenuButton) ? null : (
          <BulletPointMenuButton {...bulletPointMenuButton} />
        )}
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
  provider: PropTypes.string,
  selected: PropTypes.bool,
  selectedColor: PropTypes.string,
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
  id: PropTypes.string,
  leftIcon: PropTypes.shape({
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.string,
    preset: PropTypes.string,
    gradientBackground: PropTypes.bool,
    size: PropTypes.number,
    wrapperSize: PropTypes.number
  })
};

export default ListItem;
