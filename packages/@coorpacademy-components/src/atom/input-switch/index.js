import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputSwitch = props => {
  const {
    title,
    name,
    id,
    value,
    disabled,
    onChange = noop,
    description,
    modified = false,
    theme = 'default',
    titlePosition = 'left',
    details = '',
    requiredSelection = false,
    'data-name': dataName,
    'aria-labelledby': ariaLabelledBy,
    'aria-label': ariaLabel
  } = props;

  const idSwitch = id || uniqueId('input-switch-');
  const isDisabled = disabled ? 'disabled' : '';
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);

  const titleView = title ? (
    <span id={`title-view-${dataName}`} className={style.title}>
      {`${title} `}{' '}
    </span>
  ) : null;

  const descriptionView = description ? (
    <div className={style.description}>{description}</div>
  ) : null;

  const getClass = () => {
    switch (theme) {
      case 'coorpmanager':
        return {
          defaultClass: style.coorpmanager,
          modifiedClass: style.coorpmanagerModified
        };
      case 'mooc':
        return {
          defaultClass: style.partielUncheck,
          modifiedClass: style.coorpmanagerModified
        };
      default:
        return {defaultClass: style.default, modifiedClass: style.modified};
    }
  };
  const {defaultClass, modifiedClass} = getClass();
  const className = getClassState(defaultClass, modifiedClass, null, modified);

  return (
    <div className={className} data-name={`switch-input-${theme}${dataName}`}>
      {titlePosition === 'left' ? titleView : null}
      <div className={requiredSelection ? style.requiredSelection : null}>
        <div className={style.btnSwitchContainer}>
          <input
            {...(ariaLabelledBy ? {'aria-labelledby': ariaLabelledBy} : {})}
            {...(title ? {'aria-labelledby': `title-view-${dataName}`} : {})}
            {...(ariaLabel && !ariaLabelledBy && !title ? {'aria-label': ariaLabel} : {})}
            type="checkbox"
            id={idSwitch}
            name={name}
            onChange={handleChange}
            checked={value}
            disabled={isDisabled}
            className={style.checkbox}
            aria-labelledby={ariaLabelledBy}
          />
          <label htmlFor={idSwitch} data-name="input-switch-label" tabIndex={0} />
        </div>
      </div>
      <div className={!details ? style.alignedTextContainer : null}>
        {titlePosition === 'right' ? titleView : null}
        {details ? <div className={style.detailsTxt}>{details}</div> : null}
      </div>
      {descriptionView}
    </div>
  );
};

InputSwitch.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  description: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string,
  modified: PropTypes.bool,
  titlePosition: PropTypes.oneOf(['right', 'left']),
  theme: PropTypes.oneOf(['default', 'coorpmanager', 'mooc']),
  details: PropTypes.string,
  'data-name': PropTypes.string,
  requiredSelection: PropTypes.bool
};
export default InputSwitch;
