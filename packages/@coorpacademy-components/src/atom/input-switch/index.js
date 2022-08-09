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
    details,
    requiredSelection
  } = props;

  const idSwitch = id || uniqueId('input-switch-');
  const isDisabled = disabled ? 'disabled' : '';
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);

  const titleView = title ? <span className={style.title}>{`${title} `}</span> : null;

  const descriptionView = description ? (
    <div className={style.description}>{description}</div>
  ) : null;

  const detailsText = details ? <div className={style.detailsTxt}>{details}</div> : null;

  let defaultClass = null;
  let modifiedClass = null;
  switch (theme) {
    case 'coorpmanager':
      defaultClass = style.coorpmanager;
      modifiedClass = style.coorpmanagerModified;
      break;
    case 'partielUncheck':
      defaultClass = style.partielUncheck;
      modifiedClass = style.coorpmanagerModified;
      break;
    default:
      defaultClass = style.default;
      modifiedClass = style.modified;
      break;
  }

  const className = getClassState(defaultClass, modifiedClass, null, modified);

  return (
    <div className={className} data-name={`switch-input-${theme}`}>
      {titlePosition === 'left' ? titleView : null}
      <div className={requiredSelection ? style.requiredSelection : null}>
        <div className={style.btnSwicthContainer}>
          <input
            type="checkbox"
            id={idSwitch}
            name={name}
            onChange={handleChange}
            checked={value}
            disabled={isDisabled}
            className={style.checkbox}
          />
          <label htmlFor={idSwitch} data-name="input-switch-label" />
        </div>
      </div>
      <div className={!details ? style.alignedTxtContainer : null}>
        {titlePosition === 'right' ? titleView : null}
        {detailsText}
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
  modified: PropTypes.bool,
  titlePosition: PropTypes.oneOf(['right', 'left']),
  theme: PropTypes.oneOf(['default', 'coorpmanager', 'partielUncheck']),
  details: PropTypes.string,
  requiredSelection: PropTypes.bool
};
export default InputSwitch;
