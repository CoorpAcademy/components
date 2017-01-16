import React, {PropTypes} from 'react';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import identity from 'lodash/fp/identity';
import ModuleBubble from '../../molecule/module-bubble';
import style from './style.css';

function ModuleCard(props, context) {
  const {translate = identity, skin} = context;
  const {label, level, onClick} = props;
  const click = unary(partial(onClick, [module]));

  return (
    <div
      className={style.default}
      data-name='module-card'
      onClick={click}
    >
      <div className={style.label}>
        {translate(label)}
      </div>
      <div className={style.level}>
        {translate(level)}
      </div>
      <ModuleBubble
        module={props}
        onClick={click}
      />
    </div>
  );
}

ModuleCard.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

ModuleCard.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ModuleCard;
