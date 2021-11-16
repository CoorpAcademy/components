import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidRemoveAddAddCircle1 as AddIcon,
  NovaSolidStatusCheckCircle2 as SelectedIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const Chips = props => {
  const {text, information, selected = false, onClick} = props;

  const handleClick = useMemo(() => () => onClick(), [onClick]);

  return (
    <div
      className={classnames(style.container, selected ? style.selected : style.unselected)}
      onClick={handleClick}
    >
      <div className={style.textZone} title={text}>
        <span className={style.text}>{text}</span>
        <span className={style.information}>{information}</span>
      </div>
      {selected ? (
        <SelectedIcon className={style.selectedIconWrapper} />
      ) : (
        <AddIcon className={style.unselectedIconWrapper} />
      )}
    </div>
  );
};

Chips.propTypes = {
  text: PropTypes.string,
  information: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Chips;
