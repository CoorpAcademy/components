import { checker, createValidate } from '../../util/validation';
import style from './scope-tabs.css';

const conditions = checker.shape({
  props: checker.shape({
    selected: checker.bool,
    onClick: checker.func,
    levels: checker.arrayOf(checker.string)
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const ScopeTabs = props => {
    const {h} = treant;
    const {onClick, selected, levels} = props;

    return (
      <ul className={style.tabs}>
        {levels.map((level, index) => (
          <li
            onClick={() => onClick(index)}
            className={selected === index ? style.currentTab : style.tab}
          >
            {level}
          </li>
        ))}
      </ul>
    );
  };

  ScopeTabs.validate = createValidate(conditions);
  return ScopeTabs;
};
