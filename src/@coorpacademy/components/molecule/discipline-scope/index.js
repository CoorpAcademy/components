import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../util/validation';
import style from './discipline-scope.css';

import createScopeTabs from '../scope-tabs';
import createScopeContent from '../scope-content';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
      coursescope: checker.string
    }),
    selected: checker.bool,
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
    const {title, product, onClick, selected, levels} = props;

    return (
      <div className={style.scope}>
        <ScopeTabs
            onClick={onClick}
            selected={selected}
            levels={levels}
        />
        <ScopeContent
            title={title}
            content={levels[selected]}
        />
        <div className={style.asset}>
          <div className={style.assetTitle}>assets</div>
          <div className={style.assetDesc}>
            <div className={style.courseScope}>
              {getOrBlank('coursescope', product)}
            </div>
          </div>
        </div>
    </div>
    );
  };

  DisciplineScope.validate = createValidate(conditions);
  return DisciplineScope;
};
