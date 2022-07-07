import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {isUndefined} from 'lodash/fp';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidRemoveAddAddCircle1 as AddIcon,
  NovaLineContentEditionHide as HideIcon,
  NovaCompositionCoorpacademyEye as ShowIcon
} from '@coorpacademy/nova-icons';
import style from './selectable.css';

const Selectable = props => {
  const {isSelected, hidden = false, 'aria-label': ariaLabel = {}} = props;

  if (isUndefined(isSelected)) return null;

  return (
    <div
      className={classnames(style.selectable, isSelected && style.selected, hidden && style.hidden)}
    >
      <div className={style.circle} />
      <div className={style.iconWrapper}>
        <AddIcon className={style.addIcon} aria-label={ariaLabel.select} />
        <CheckIcon className={style.checkIcon} aria-label={ariaLabel.unSelect} />
        <HideIcon className={style.hideIcon} aria-label={ariaLabel.hide} />
        <ShowIcon className={style.showIcon} aria-label={ariaLabel.show} />
      </div>
    </div>
  );
};

Selectable.propTypes = {
  isSelected: PropTypes.bool,
  hidden: PropTypes.bool,
  'aria-label': PropTypes.shape({
    select: PropTypes.string,
    unSelect: PropTypes.string
  })
};

export default Selectable;
