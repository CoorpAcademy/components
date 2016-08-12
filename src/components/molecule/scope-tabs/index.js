import { checker, createValidate } from '../../../util/validation';
import style from './scope-tabs.css';

export default (engine, options = {}) => {
  const ScopeTabs = (props) => {
    const {h} = engine;
    const {onClick, selected} = props;
    return (
        <ul className={style.title}>
            <li onClick={() => onClick(0)} className={selected === 0 ? style.tabscurrent : style.tabs}>Base</li>
            <li onClick={() => onClick(1)} className={selected === 1 ? style.tabscurrent : style.tabs}>Avancé</li>
            <li onClick={() => onClick(2)} className={selected === 2 ? style.tabscurrent : style.tabs}>Coach</li>
        </ul>
    );
  };
  return ScopeTabs;
};
