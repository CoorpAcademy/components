import {checker, createValidate} from '../../util/validation';
import createScopeTabs from '../scope-tabs';
import createScopeContent from '../scope-content';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    levels: checker.array.optional,
    selected: checker.number.optional,
    content: checker.object.optional,
    onClick: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const ScopeTabs = createScopeTabs(treant, options);
  const ScopeContent = createScopeContent(treant, options);

  const DisciplineScope = (props, children) => {
    const {h} = treant;
    const {onClick, selected = 0, content, levels = []} = props;

    return (
      <div className={style.scope}>
        <ScopeTabs
          onClick={onClick}
          selected={selected}
          levels={levels}
        />
        <ScopeContent
          content={content}
        />
      </div>
    );
  };

  DisciplineScope.validate = createValidate(conditions);
  return DisciplineScope;
};
