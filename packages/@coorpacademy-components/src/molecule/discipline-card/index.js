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
      module={_module}
      onClick={onModuleClick}
      key={_module.ref}
    />
  ));

  const click = unary(partial(onClick, [discipline]));
  const label = translate(discipline.label);
  const hasCourse = discipline.courseNum !== 'undefined';

  const defaultColor = getOr('#fff', 'common.primary', skin);

  const bg = getOr(defaultColor, ['courses', discipline.courseNum], skin);

  const defaultBgColor = discipline.media ? getOr('#fff', 'common.primary', skin) : '#f0f';
  const media = getOr(defaultBgColor, 'media', discipline);

  const hidecover = discipline.media ? 'block' : 'none';
  const hideGradient = discipline.media ? 'linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, #000000 100%)' : '0';

  const bar = (
    <div
      className={style.bar}
      style={{
        background: bg,
        height: '5px'
      }}
    />
  );

  return (
    <div
      className={disciplineClass}
      data-name='discipline-card'
      style={mainStyle}
    >
      <div
        className={style.area}
        style={{
          borderColor: bg
        }}
      >
        <div className={style.wrapperCover}
             style={{
              backgroundColor: defaultBgColor,
              backgroundImage: hideGradient
             }}
        >
          <img className={style.cover} src={media} 
                style={{
                  display: hidecover
                 }}
          />
        </div>  
        <div
          className={style.text}
          onClick={click}
        >
          <p className={style.headerModule}>
            {label}
          </p>
          <span className={style.arrow}></span>
        </div>
      </div>

      {hasCourse && bar}

      <div className={style.moduleProgressionWrapper}>
        {modules}
      </div>
    </div>
  );
}

DisciplineCard.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

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
  theme: PropTypes.oneOf(['default']),
  row: PropTypes.bool
};

export default DisciplineCard;
