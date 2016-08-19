import { checker, createValidate } from '../../util/validation';
import style from './discipline-scope.css';

import createScopeTabs from '../scope-tabs';
import createScopeContent from '../scope-content';

export default (treant, options = {}) => {
  const ScopeTabs = createScopeTabs(treant, options);
  const ScopeContent = createScopeContent(treant, options);

  const DisciplineScope = (props, children) => {
    const {h} = treant;
    const {product, onClick, selected} = props;

    return (
      <div className={style.scope}>
            <ScopeTabs
                onClick={onClick}
                selected={selected}
            />
                <ScopeContent
                    selected={selected}
                />
            <div className={style.asset}>
                <div className={style.assetTitle}>assets</div>
                <div className={style.assetDesc}>
                    <div className={style.courseScope}>
                      {product.coursescope}
                    </div>
                </div>
            </div>
        </div>
    );
  };

  return DisciplineScope;
};
