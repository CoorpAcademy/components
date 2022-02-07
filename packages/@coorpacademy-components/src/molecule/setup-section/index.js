import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
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
      <RadioGroup {...contentTypes} color={contentTypesColor} />
    </div>
  );
};

ContentTypesToggler.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ContentTypesToggler.propTypes = {
  contentTypes: PropTypes.shape({
    ...RadioGroup.propTypes,
    modified: PropTypes.bool
  })
};

const SetupSection = (props, context) => {
  const {translate} = context;

  const {title, display, contentTypes} = props;

  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        <ContentTypesToggler contentTypes={contentTypes} />
        <div className={style.label}>{translate('Show')}</div>
        <InputSwitch {...display} />
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
