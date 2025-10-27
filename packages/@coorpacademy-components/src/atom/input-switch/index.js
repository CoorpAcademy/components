import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {getOr, noop, uniqueId} from 'lodash/fp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import getClassState from '../../util/get-class-state';
import {COLORS} from '../../variables/colors';
import Provider from '../provider';
import style from './style.css';

const InputSwitch = (props, context) => {
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
    'aria-label': ariaLabel,
    icon
  } = props;
  const {skin} = context;
  const primaryColor = getOr(COLORS.cm_primary_blue, 'common.primary', skin);
  const idSwitch = id || uniqueId('input-switch-');
  const isDisabled = disabled ? 'disabled' : '';
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);
  const titleView = title ? (
    <div
      className={classNames(
        icon ? style.titleContainer : null,
        theme === 'newMooc' ? style.newMoocTitleContainer : null
      )}
    >
      {icon ? <FontAwesomeIcon icon={icon} className={style.icon} /> : null}
      <span id={`title-view-${dataName}`} className={style.title}>
        {title}
      </span>
    </div>
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
      case 'newMooc':
        return {
          defaultClass: style.newMooc,
          modifiedClass: style.newMoocModified
        };
      case 'mooc':
        return {
          defaultClass: style.partielUncheck,
          modifiedClass: style.coorpmanagerModified
        };
      default:
        return {defaultClass: style.defaultStyle, modifiedClass: style.modified};
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
          <label
            htmlFor={idSwitch}
            data-name="input-switch-label"
            tabIndex={0}
            aria-label={ariaLabel}
            title={ariaLabel}
            style={value ? {background: primaryColor, borderColor: primaryColor} : null}
          />
        </div>
      </div>
      {details || titlePosition === 'right' ? (
        <div className={!details ? style.alignedTextContainer : null}>
          {titlePosition === 'right' ? titleView : null}
          {details ? <div className={style.detailsTxt}>{details}</div> : null}
        </div>
      ) : null}

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
  theme: PropTypes.oneOf(['default', 'coorpmanager', 'mooc', 'newMooc']),
  details: PropTypes.string,
  'data-name': PropTypes.string,
  requiredSelection: PropTypes.bool,
  icon: PropTypes.string
};

InputSwitch.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default InputSwitch;
