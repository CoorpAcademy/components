import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import ScopeTabs from '../scope-tabs';
import ScopeContent from '../scope-content';
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

const DisciplineScope = ({children, ...props}) => {
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
export default DisciplineScope;
