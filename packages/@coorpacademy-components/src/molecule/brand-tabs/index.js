import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    tabs: checker.arrayOf(checker.shape({
      title: checker.string,
      href: checker.string,
      selected: checker.bool.optional
    }))
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandTabs = (props, children) => {
    const {
      tabs
    } = props;

    const tabsList = tabs.map(tab => {
      const {
        title,
        href,
        selected
      } = tab;

      const className = selected ? style.selected : style.tab;

      return (
        <div className={className}>
          <a href={href}>{title}</a>
        </div>
      );
    });

    return (
      <div className={style.wrapper}>
        {tabsList}
      </div>
    );
  };

  BrandTabs.validate = createValidate(conditions);
  return BrandTabs;
};
