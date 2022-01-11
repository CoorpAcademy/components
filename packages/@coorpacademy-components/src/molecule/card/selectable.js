import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {isUndefined} from 'lodash/fp';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidRemoveAddAddCircle1 as AddIcon
} from '@coorpacademy/nova-icons';
import style from './selectable.css';

const Selectable = props => {
  const {isSelected} = props;

  if (isUndefined(isSelected)) return null;

  return (
    <div className={classnames(style.selectable, isSelected && style.selected)}>
      <div className={style.circle} />
      <div className={style.iconWrapper}>
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
