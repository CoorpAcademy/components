import React from 'react';
import PropTypes from 'prop-types';
import {isUndefined} from 'lodash/fp';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidRemoveAddRemoveCircle1 as RemoveIcon,
  NovaSolidRemoveAddAddCircle1 as AddIcon
} from '@coorpacademy/nova-icons';
import style from './selectable.css';

const Selectable = props => {
  const {isSelected} = props;

  if (isUndefined(isSelected)) return null;

  return (
    <div className={style.selectable} data-name={`selected-${isSelected}`}>
      <div className={style.circle} />
      <div className={style.iconWrapper}>
        <RemoveIcon className={style.removeIcon} />
        <AddIcon className={style.addIcon} />
        <CheckIcon className={style.checkIcon} />
      </div>
    </div>
  );
};

Selectable.propTypes = {
  isSelected: PropTypes.bool
};

export default Selectable;
