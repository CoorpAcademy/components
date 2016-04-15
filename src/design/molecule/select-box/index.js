import style from './select-box.css';
import createTitledCheckbox from '../titled-checkbox';

export default (engine, options) => {
  const {h} = engine;
  const TitledCheckbox = createTitledCheckbox(engine, options);

  return (props) => {
    const {choices, onToggle} = props;
    const lines = choices.map(function(choice){
      return (
        <li className={style.line}>
          <TitledCheckbox
            state={choice}
            onToggle={onToggle}
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
