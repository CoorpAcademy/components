import React, {PropTypes} from 'react';
import set from 'lodash/fp/set';
import getOr from 'lodash/fp/getOr';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import identity from 'lodash/fp/identity';
import ModuleBubble from '../../molecule/module-bubble';
import style from './style.css';

function DisciplineCard(props, context) {
  const {translate = identity, skin} = context;
  const {discipline, onClick, onModuleClick, row} = props;

  const hidden = discipline.visible === false;
  const disciplineClass = hidden ? style.hidden : style[(props.theme || 'default')];
  const rand = (Math.floor(Math.random() * 7) + 3) * .2;
  const duration = hidden ? 1 : rand;
  const animationDuration = `${duration}s`;

  let mainStyle = {animationDuration};
  if (row) {
    mainStyle = set('width', '100%', mainStyle);
    mainStyle = set('margin', '10px 0', mainStyle);
  }

  const modules = discipline.modules.map(_module => (
    <ModuleBubble
      module = {_module}
      onClick = {onModuleClick}
      key = {_module.ref}
    >
    </ModuleBubble>
  ));

  const click = unary(partial(onClick, [discipline]));
  const label = translate(discipline.label);
  const hasCourse = discipline.courseNum !== 'undefined';

  const defaultColor = props.theme === 'circle' ? getOr('#fff', 'common.primary', skin) : '#fff';

  const bg = getOr(defaultColor, ['courses', discipline.courseNum], skin);
  const bar =
    <div
      className={style.bar}
      style={{
        background: bg,
        height: '5px'
      }}
    />;

  return (
    <div className={disciplineClass}
         attributes={{
           'data-name': 'discipline-card'
         }}
         style={mainStyle}
    >
      <div
        className={style.area}
        style={{
          borderColor: bg
        }}
      >
        <div
          className={style.text}
          onClick={click}
        >
          <p className={style.headerModule}>
            {label}
          </p>
        </div>
      </div>

      {hasCourse && bar}

      <div className={style.moduleProgressionWrapper}>
        {modules}
      </div>
    </div>
  );
}

DisciplineCard.propTypes = {
  discipline: PropTypes.shape({
    visible: PropTypes.bool,
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        ref: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onModuleClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['default', 'circle']),
  row: PropTypes.bool
};

export default DisciplineCard;
