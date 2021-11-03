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
  const {isCardHovered, isSelected} = props;

  if (isUndefined(isSelected)) return null;
  if (!isCardHovered && !isSelected) return null;

  const renderRemoveIcon =
    isCardHovered && isSelected ? <RemoveIcon className={style.removeIcon} /> : null;
  const renderAddIcon = isCardHovered && !isSelected ? <AddIcon className={style.addIcon} /> : null;
  const renderCheckIcon =
    !isCardHovered && isSelected ? <CheckIcon className={style.checkIcon} /> : null;

  return (
    <div className={style.selectable}>
      <div className={style.circle} />
      <div className={style.iconWrapper}>
        {renderAddIcon}
        {renderRemoveIcon}
        {renderCheckIcon}
      </div>
    </div>
  );
};

Selectable.propTypes = {
  isCardHovered: PropTypes.bool,
  isSelected: PropTypes.bool
};

export default Selectable;
