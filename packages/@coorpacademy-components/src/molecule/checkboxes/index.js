import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import TitledCheckbox from '../titled-checkbox';
import style from './style.css';

const DEFAULT = 'default';
const NORMAL = 'normal';
const CLOSABLE = 'closable';
const CLOSED = 'closed';

/**
 * themes
 *  - default (default)
 *  - courses
 *
 * modes
 *  - normal (default)
 *  - closable
 *
 * status
 *  - closed (default)
 *  - open
 */
function Checkboxes(props, context) {
  const {
    title,
    choices,
    onToggle,
    onClose,
    onOpen,
    theme = DEFAULT,
    mode = NORMAL,
    close: _close,
    status: _status = CLOSED
  } = props;
  const {
    translate = identity,
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
    return get('status', _options) === CLOSED ?
      closedHeader(_options) :
      openHeader(_options);
  };

  const isCourses = theme === 'courses';
  let header = null;

  if (mode === CLOSABLE) {
    header = createHeader({
      title: translate(title),
      close: translate(_close),
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
    <div className={style[_status]}>
      {header}
      <ul className={style.list}>
        {lines}
      </ul>
    </div>
  );
}

Checkboxes.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

Checkboxes.propTypes = {
  choices: PropTypes.array.isRequired,
  close: PropTypes.func,
  mode: PropTypes.string,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onToggle: PropTypes.func,
  status: PropTypes.string,
  theme: PropTypes.string,
  title: PropTypes.string.isRequired
};
export default Checkboxes;
