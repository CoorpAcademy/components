import style from './select-box.css';
import createTitledCheckbox from '../titled-checkbox';

export default (engine, options) => {
  const {h} = engine;
  const TitledCheckbox = createTitledCheckbox(engine, options);

  return (props) => {
    const lines = props.options.map(function(option){
      return (
        <TitledCheckbox label={option}>
        </TitledCheckbox>
      );
    });

    return (
      <ul className={style.default}>
        {lines}
      </ul>
    );
  };
};
