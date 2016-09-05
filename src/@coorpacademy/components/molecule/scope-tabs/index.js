import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    selected: checker.number.optional,
    onClick: checker.func.optional,
    levels: checker.arrayOf(checker.string).optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const ScopeTabs = props => {
    const {h} = treant;
    const {onClick, selected = 0, levels = []} = props;

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
