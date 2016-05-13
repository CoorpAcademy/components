import style from './checkboxes.css';
import createTitledCheckbox from '../titled-checkbox';

const DEFAULT = 'default';
const NORMAL = 'normal';
const CLOSABLE = 'closable';
const OPEN = 'open';
const CLOSED = 'closed';

export default (engine, options) => {
  const {h} = engine;
  const {skin, translate} = options;
  const TitledCheckbox = createTitledCheckbox(engine, options);
  const cross = skin && String.fromCharCode(skin.icons.close) || 'x';
  const arrow = skin && String.fromCharCode(skin.icons['arrow-bottom']) || 'v';

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
  return props => {
    const {
      title,
      choices,
      onToggle,
      onClose,
      onOpen,
      theme = DEFAULT,
      mode = NORMAL,
      status = CLOSED
    } = props;

    const courses = theme === 'courses';
    let header = null;

    if (mode === CLOSABLE) {
      header = createHeader({
        title: translate ? translate(title) : title,
        status,
        onClose,
        onOpen
      });
    }

    const lines = choices.map((choice, i) => {
      const background = courses ? skin.courses && skin.courses[i - 1] : null;

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
};
