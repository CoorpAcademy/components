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
    mode = NORMAL
  } = props;
  const {
    translate = identity,
    skin
  } = context;

  const cross = String.fromCharCode(getOr('x', 'icons.close', skin));
  const arrow = String.fromCharCode(getOr('v', 'icons["arrow-bottom"]', skin));

  const closedHeader = ({onOpen, title}) => (
    <div className={style.closedHeader}>
      <span onClick={onOpen}>
        <span>{title}</span>
        <span className={style.arrow}>
          {arrow}
        </span>
      </span>
    </div>
  );

  const openHeader = _options => (
    <div className={style.openHeader}>
      <span
        className={style.closeText}
      >
        {_options.close}
      </span>
      <span
        className={style.close}
        onClick={_options.onClose}
      >
        {cross}
      </span>
    </div>
  );

  const createHeader = _options => {
    const _status = get('status', _options);
    return _status === CLOSED ? closedHeader(_options) : openHeader(_options);
  };

  const _close = get('close', props);
  const _status = getOr(CLOSED, 'status', props);

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
};

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
