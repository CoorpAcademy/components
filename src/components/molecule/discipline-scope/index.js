import { checker, createValidate } from '../../../util/validation';
import style from './discipline-scope.css';
import createScopeTabs from '../scope-tabs';
import createScopeContent from '../scope-content';

export default (engine, options = {}) => {
  const ScopeTabs = createScopeTabs(engine, options); 
  const ScopeContent = createScopeContent(engine, options);  

  const DisciplineScope = (props, children) => {
    const {h} = engine;
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
                <div className={style.assettitle}>assets</div>
                <div className={style.assetdesc}>
                    <div className={style.coursescope}>
                      {product.coursescope}
                    </div>
                </div>
            </div>
        </div>
    );
  };

  return DisciplineScope;
};