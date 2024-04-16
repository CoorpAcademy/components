import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidRemoveAddAddCircle1 as AddIcon,
  NovaSolidStatusCheckCircle2 as SelectedIcon
} from '@coorpacademy/nova-icons';
import get from 'lodash/fp/get';
import Provider from '../provider';
import style from './style.css';

const Chips = (props, context) => {
  const {text, information, selected = false, onClick} = props;
  const {skin} = context;
  const skinColor = get('common.primary', skin);
  const handleClick = useMemo(() => () => onClick(), [onClick]);

  return (
    <div
      className={classnames(style.container, selected ? style.selected : style.unselected)}
      style={selected && skinColor ? {backgroundColor: skinColor} : {}}
      onClick={handleClick}
      aria-label={`${text} ${information}`}
      data-name={text}
    >
      <div className={style.textZone} title={text}>
        <span className={style.text}>{text}</span>
        <span className={style.information}>{information}</span>
      </div>
      {selected ? (
        <SelectedIcon
          className={style.selectedIconWrapper}
          style={skinColor ? {color: skinColor} : {}}
        />
      ) : (
        <AddIcon className={style.unselectedIconWrapper} />
      )}
    </div>
  );
};

Chips.contextTypes = {
  skin: Provider.childContextTypes.skin
};
Chips.propTypes = {
  text: PropTypes.string,
  information: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Chips;
