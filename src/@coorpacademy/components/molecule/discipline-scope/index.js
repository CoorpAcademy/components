import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

import createScopeTabs from '../scope-tabs';
import createScopeContent from '../scope-content';

const conditions = checker.shape({
  props: checker.shape({
    levels: checker.array,
    selected: checker.number,
    content: checker.object,
    onClick: checker.func
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const ScopeTabs = createScopeTabs(treant, options);
  const ScopeContent = createScopeContent(treant, options);

  const DisciplineScope = (props, children) => {
    const {h} = treant;
    const {onClick, selected = 0, content, levels} = props;

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
