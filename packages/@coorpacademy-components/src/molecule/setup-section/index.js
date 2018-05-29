import React from 'react';
import PropTypes from 'prop-types';
import ArrowDownIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-down';
import ArrowUpIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-top';
import get from 'lodash/fp/get';
import Provider from '../../atom/provider';
import InputSwitch from '../../atom/input-switch';
import RadioGroup from '../../atom/radio-group';
import style from './style.css';

const ContentTypesToggler = (props, context) => {
  const {skin} = context;
  const {contentTypes} = props;

  if (!contentTypes) {
    return null;
  }

  const brand = get('common.brand', skin);
  const orange = get('common.orange', skin);
  const contentTypesColor = get('modified', contentTypes) ? orange : brand;

  return (
    <div className={style.contentTypeWrapper}>
      <RadioGroup color={contentTypesColor} {...contentTypes} />
    </div>
  );
};

ContentTypesToggler.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ContentTypesToggler.propTypes = {
  contentTypes: PropTypes.shape({
    modified: PropTypes.bool,
    ...RadioGroup.propTypes
  })
};

const SetupSection = (props, context) => {
  const {translate, skin} = context;
  const brand = get('common.brand', skin);
  const medium = get('common.medium', skin);

  const {title, onUp, onDown, display, contentTypes} = props;
  const colorUp = onDown ? brand : medium;
  const colorDown = onUp ? brand : medium;

  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        <ContentTypesToggler contentTypes={contentTypes} />
        <div className={style.label}>{translate('Show')}</div>
        <InputSwitch {...display} />
        <ArrowDownIcon
          color={colorUp}
          className={onDown ? style.arrow : style.disabled}
          onClick={onDown}
        />
        <ArrowUpIcon
          color={colorDown}
          className={onUp ? style.arrow : style.disabled}
          onClick={onUp}
        />
      </div>
    </div>
  );
};

SetupSection.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SetupSection.propTypes = {
  title: PropTypes.string.isRequired,
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  display: PropTypes.shape(InputSwitch.propTypes),
  contentTypes: ContentTypesToggler.propTypes.contentTypes
};

export default SetupSection;
