import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import values from 'lodash/fp/values';
import TitledCheckbox from '../titled-checkbox';
import style from './style.css';

const THEME = {
  DEFAULT: 'default',
  COURSES: 'courses'
};

const MODE = {
  NORMAL: 'normal',
  CLOSABLE: 'closable'
};

const STATUS = {
  CLOSED: 'closed',
  OPEN: 'open'
};

const statusStyle = {
  closed: style.closed,
  open: style.open
};

function Checkboxes(props, context) {
  const {
    title,
    choices,
    onToggle,
    onClose,
    onOpen,
    theme = THEME.DEFAULT,
    mode = MODE.NORMAL,
    close: _close,
    status: _status = STATUS.CLOSED
  } = props;

  const {
    skin
  } = context;

  const cross = String.fromCharCode(getOr('x', 'icons.close', skin));
  const arrow = String.fromCharCode(getOr('v', 'icons["arrow-bottom"]', skin));

  const closedHeader = ({onOpen: onOpenHeader, title: headerTitle}) => (
    <div className={style.closedHeader}>
      <span onClick={onOpenHeader}>
        <span>{headerTitle}</span>
        <span className={style.arrow}>
          {arrow}
        </span>
      </span>
    </div>
  );

  const openHeader = ({close: closeHeader, onClose: handlerClose}) => (
    <div className={style.openHeader}>
      <span
        className={style.closeText}
      >
        {closeHeader}
      </span>
      <span
        className={style.close}
        onClick={handlerClose}
      >
        {cross}
      </span>
    </div>
  );

  const createHeader = _options => {
    return get('status', _options) === STATUS.CLOSED ?
      closedHeader(_options) :
      openHeader(_options);
  };

  const isCourses = theme === 'courses';
  let header = null;

  if (mode === MODE.CLOSABLE) {
    header = createHeader({
      title,
      close: _close,
      status: _status,
      onClose,
      onOpen
    });
  }

  const lines = choices.map((choice, i) => {
    const defaultBG = '#ededed';
    const coursesBG = getOr(defaultBG, ['courses', i - 1], skin);
    const background = isCourses ? coursesBG : defaultBG;

    return (
      <li
        className={style.line}
        key={i}
      >
        <TitledCheckbox
          background={background}
          onToggle={onToggle}
          state={choice}
        />
      </li>
    );
  });

  return (
    <div className={statusStyle[_status]}>
      {header}
      <ul className={style.list}>
        {lines}
      </ul>
    </div>
  );
}

Checkboxes.contextTypes = {
  skin: PropTypes.object
};

Checkboxes.propTypes = {
  choices: PropTypes.array.isRequired,
  close: PropTypes.func,
  mode: PropTypes.oneOf(values(MODE)),
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onToggle: PropTypes.func,
  status: PropTypes.oneOf(values(STATUS)),
  theme: PropTypes.oneOf(values(THEME)),
  title: PropTypes.string.isRequired
};
export default Checkboxes;
