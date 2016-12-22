import React, {PropTypes} from 'react';
import ScopeTabs from '../scope-tabs';
import ScopeContent from '../scope-content';
import style from './style.css';

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

DisciplineScope.propTypes = {
  levels: PropTypes.array,
  selected: PropTypes.number,
  content: PropTypes.object,
  onClick: PropTypes.func
};
export default DisciplineScope;
