import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidRemoveAddAddCircle1 as AddIcon,
  NovaSolidStatusCheckCircle2 as SelectedIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const SearchResultItem = props => {
  const {text, information, selected, onClick} = props;

  const handleClick = useMemo(() => () => onClick(), [onClick]);

  return (
    <div
      className={classnames(style.container, selected ? style.selected : style.unselected)}
      onClick={handleClick}
    >
      <div className={style.text}>{text}</div>
      <div className={style.information}>{information}</div>
      {selected ? (
        <SelectedIcon className={style.selectedIconWrapper} />
      ) : (
        <AddIcon className={style.unselectedIconWrapper} />
      )}
    </div>
  );
};

SearchResultItem.propTypes = {
  text: PropTypes.string,
  information: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default SearchResultItem;
