import React from 'react';
import {isEmpty} from 'lodash/fp';
import ScopeTabs from '../scope-tabs';
import ScopeContent from '../scope-content';
import style from './style.css';

const DisciplineScope = props => {
  const {onClick, selected = 0, content = {}, levels = []} = props;

  return (
    <div className={style.scope}>
      {!isEmpty(levels) ? (
        <ScopeTabs onClick={onClick} selected={selected} levels={levels} />
      ) : null}
      <ScopeContent content={content} />
    </div>
  );
};

DisciplineScope.propTypes = {
  levels: ScopeTabs.propTypes.levels,
  selected: ScopeTabs.propTypes.selected,
  onClick: ScopeTabs.propTypes.onClick,
  content: ScopeContent.propTypes.content
};

export default DisciplineScope;
