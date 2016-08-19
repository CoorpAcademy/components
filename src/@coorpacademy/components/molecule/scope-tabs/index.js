import { checker, createValidate } from '../../util/validation';
import style from './scope-tabs.css';

export default (treant, options = {}) => {
  const ScopeTabs = props => {
    const {h} = treant;
    const {onClick, selected} = props;

    return (
      <ul className={style.tabs}>
        {['Base', 'Avancé', 'Coach'].map((title, index) => (
          <li
            onClick={() => onClick(index)}
            className={selected === index ? style.currentTab : style.tab}
          >
            {title}
          </li>
        ))}
      </ul>
    );
  };

  return ScopeTabs;
};
