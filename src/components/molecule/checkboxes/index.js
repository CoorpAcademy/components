import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../../util/validation';
import style from './checkboxes.css';
import createTitledCheckbox from '../titled-checkbox';

const DEFAULT = 'default';
const NORMAL = 'normal';
const CLOSABLE = 'closable';
const OPEN = 'open';
const CLOSED = 'closed';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    choices: checker.array
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin, translate} = options;
  const TitledCheckbox = createTitledCheckbox(engine, options);

  const cross = String.fromCharCode(getOr('x', 'icons.close', skin));
  const arrow = String.fromCharCode(getOr('v', 'icons["arrow-bottom"]', skin));

  const closedHeader = options => (
    <div className={style.closedHeader}>
      <span onClick={options.onOpen}>
        <span>{options.title}</span>
        <span className={style.arrow}>
          {arrow}
        </span>
      </span>
    </div>
  );

  const openHeader = options => (
    <div className={style.openHeader}>
      <span
        className={style.closeText}
      >
        {options.close}
      </span>
      <span
        className={style.close}
        onClick={options.onClose}
      >
        {cross}
      </span>
    </div>
  );

  const createHeader = options => {
    const {status} = options;
    return status === CLOSED ? closedHeader(options) : openHeader(options);
  };

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
  const Checkboxes = (props, children) => {
    const {
      title,
      close,
      choices,
      onToggle,
      onClose,
      onOpen,
      theme = DEFAULT,
      mode = NORMAL,
      status = CLOSED
    } = props;

    const isCourses = theme === 'courses';
    let header = null;

    if (mode === CLOSABLE) {
      header = createHeader({
        title: translate ? translate(title) : title,
        close: translate ? translate(close) : close,
        status,
        onClose,
        onOpen
      });
    }

    const lines = choices.map((choice, i) => {
      const defaultBG = '#fff';
      const coursesBG = getOr(defaultBG, `courses${[i - 1]}`, skin);
      const background = isCourses ? coursesBG : defaultBG;

      return (
        <li className={style.line}>
          <TitledCheckbox
            state={choice}
            onToggle={onToggle}
            background={background}
          >
          </TitledCheckbox>
        </li>
      );
    });

    return (
      <div className={style[status]}>
        {header}
        <ul className={style.list}>
          {lines}
        </ul>
      </div>
    );
  };

  Checkboxes.validate = createValidate(conditions);
  return Checkboxes;
};
