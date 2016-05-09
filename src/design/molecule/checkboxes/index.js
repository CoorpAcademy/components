import style from './checkboxes.css';
import createTitledCheckbox from '../titled-checkbox';

export default (engine, options) => {
  const {h} = engine;
  const {skin} = options;
  const TitledCheckbox = createTitledCheckbox(engine, options);

  return props => {
    const {choices, onToggle, theme = 'default'} = props;
    const courses = theme === 'courses';

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
      <ul className={style.default}>
        {lines}
      </ul>
    );
  };
};
