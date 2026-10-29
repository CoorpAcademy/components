import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map, noop, get, last, split, pipe} from 'lodash/fp';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import FaIcon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import {COLORS} from '../../variables/colors';
import CardImagePreview from '../../atom/card-image-preview';
import Selectable from '../../molecule/card/selectable';
import ContentBadge from '../../atom/content-badge';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import InputCheckbox from '../../atom/input-checkbox';
import ProgressBar from '../../molecule/progress-bar';
import style from './style.css';

// The thin completion bar: ProgressBar styles its inner bar through its `style` prop.
const THIN_PROGRESS_STYLE = {
  backgroundColor: COLORS.cm_positive_500,
  borderRadius: '4px',
  animation: 'none'
};

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
    titleTags,
    details,
    progress,
    dataColumns,
    order,
    'aria-label': ariaLabel,
    disabled = false,
    contentType,
    isBulkStyle = false,
    isOverflowHidden = false,
    onClick = noop,
    leftIcon,
    image,
    imageOverlay,
    contentBadge,
    checkbox,
    subItems,
    'data-name': dataName
  },
  context
) => {
  const {skin} = context;
  const primarySelectedColor = selectedColor || get('common.primary', skin);
  const mapUncapped = map.convert({cap: false});
  const checkable = checkbox || false;
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
      <div className={style.order} role="group" aria-label={ariaLabel}>
        {order + 1}
      </div>
    ) : null;

  const extractedIndex = pipe(split('-'), last)(dataName);

  return (
    <>
      <div
        className={classnames(
          style.wrapper,
          isBulkStyle ? style.gridLayout : style.flexLayout,
          subtitle && style.withSubtitle,
          disabled && style.disabled,
          onClick !== noop && !disabled && style.cursorPointer,
          checkbox?.checked && style.checked
        )}
        onClick={!disabled ? onClick : undefined}
        style={selectedStyle}
        data-name={dataName}
      >
        <div
          className={classnames(
            style.dataColumnsWrapper,
            isOverflowHidden && style.hiddenOverflowX
          )}
        >
          {isPublished && contentType === 'certification' ? orderView : null}
          {leftIcon || image || checkable ? (
            <div className={style.leftSection}>
              {checkable ? <CheckboxWithTitle {...checkbox} /> : null}
              {leftIcon && !image ? (
                <FaIcon
                  iconName={leftIcon.iconName}
                  gradientBackground={leftIcon.gradientBackground || true}
                  iconColor={leftIcon.iconColor || primarySelectedColor}
                  preset={leftIcon.preset || 'xl'}
                  borderRadius={leftIcon.borderRadius || '25%'}
                />
              ) : null}
              {!leftIcon && image ? (
                <div
                  className={classnames(
                    style.containerImage,
                    imageOverlay && style.imageWithOverlay
                  )}
                >
                  <CardImagePreview image={image} />
                  {imageOverlay === 'hidden' ? (
                    <div
                      className={style.imageOverlay}
                      aria-hidden="true"
                      data-name="content-image-overlay"
                    >
                      <Selectable isSelected hidden />
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className={style.titleWrapper}>
            <div className={style.titleProviderWrapper}>
              {title ? (
                <div
                  className={classnames(style.title, !isEmpty(titleTags) && style.titleBeforeTags)}
                  title={title.replace(/<[^>]*>/g, '')}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{__html: title}}
                />
              ) : null}
              {!isEmpty(provider) ? (
                <Tag label={provider.label} type={provider.type} className={style.providerTag} />
              ) : null}
              {!isEmpty(titleTags) ? (
                <div className={style.titleTags} data-name="title-tags">
                  {titleTags.map(tag => (
                    <div key={tag.label} className={style.tag}>
                      <Tag {...tag} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {subtitle ? <div className={style.subtitle}>{subtitle}</div> : null}
            {details ? <div className={style.details}>{details}</div> : null}
            {progress ? (
              <div className={style.progress} data-name="list-item-progress">
                <ProgressBar
                  className={style.progressBar}
                  value={progress.value}
                  max={100}
                  style={THIN_PROGRESS_STYLE}
                  displayInfo={false}
                />
                <span className={style.progressLabel}>{progress.label}</span>
              </div>
            ) : null}
          </div>
          {dataColumnsView}
        </div>
        <div className={style.settings}>
          {tagsView}
          {contentBadge ? <ContentBadge {...contentBadge} /> : null}
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
          {!isEmpty(bulletPointMenuButton) ? (
            <BulletPointMenuButton
              {...bulletPointMenuButton}
              data-name={`bullet-point-menu-button-${extractedIndex}`}
            />
          ) : null}
        </div>
      </div>
      {!isEmpty(subItems) ? (
        <ul className={style.subItems} data-name="list-item-sub-items">
          {subItems.map(item => (
            <li className={style.subItem} key={item.ref}>
              <InputCheckbox
                {...item.checkbox}
                title={item.title}
                disabled={item.disabled}
                theme="coorpmanager"
                titleStyle="inherit"
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

ListItem.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  // Tags shown right after the title
  titleTags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: Tag.propTypes.type
    })
  ),
  // A second line under the subtitle
  details: PropTypes.string,
  // A thin completion bar (0 to 100) with its label
  progress: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
  }),
  'data-name': PropTypes.string,
  provider: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.oneOf(['info', 'default', 'success', 'failure', 'warning', 'progress'])
  }),
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
  }),
  imageOverlay: PropTypes.oneOf(['hidden']),
  contentBadge: PropTypes.shape(ContentBadge.propTypes),
  image: PropTypes.string,
  checkbox: PropTypes.shape(CheckboxWithTitle.propTypes),
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      checkbox: PropTypes.shape({
        checked: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired
      }).isRequired,
      disabled: PropTypes.bool
    })
  )
};

export default ListItem;
