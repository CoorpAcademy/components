import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import identity from 'lodash/fp/identity';
import ModuleBubble from '../../molecule/module-bubble';
import style from './style.css';

function DisciplineCard(props, context) {
  const {skin} = context;
  const {discipline, onClick, onModuleClick} = props;

  const hidden = discipline.visible === false;
  const disciplineClass = hidden ? style.hidden : style.default;
  const rand = (Math.floor(Math.random() * 7) + 3) * .2;
  const duration = hidden ? 1 : rand;
  const animationDuration = `${duration}s`;
  const mainStyle = {animationDuration};

  const modules = discipline.modules.map(_module => (
    <ModuleBubble
      module={_module}
      onClick={onModuleClick}
      key={_module.ref}
    />
  ));

  const click = unary(partial(onClick, [discipline]));
  const label = discipline.label;
  const hasCourse = discipline.courseNum !== 'undefined';

  const defaultColor = getOr('#f0f', 'common.primary', skin);
  const barColor = getOr('transparent', ['courses', discipline.courseNum], skin);

  const mediaDiv = discipline.media ? (
    <div className={style.coverWrapper}>
      <img className={style.cover}
        src={discipline.media}
      />
      <div className={style.gradient} />
    </div>
  ) : null;

  const colorDiv = !discipline.media ? (
    <div className={style.coverColorWrapper}
      style={{
        backgroundColor: defaultColor
      }}
    />
  ) : null;
  const bar = (
    <div
      className={style.bar}
      style={{
        background: barColor
      }}
    />
  );

  return (
    <div
      className={disciplineClass}
      data-name='discipline-card'
      style={mainStyle}
    >
      <div className={style.disciplineWrapper}>
        {colorDiv}
        {mediaDiv}
        <div
          className={style.textWrapper}
          onClick={click}
        >
          <div className={style.title}>
            {label}
          </div>
          <span className={style.arrow} />
        </div>
        {hasCourse && bar}
      </div>
      <div className={style.modulesWrapper}>
        {modules}
      </div>
    </div>
  );
}

DisciplineCard.contextTypes = {
  skin: PropTypes.object
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
  onModuleClick: PropTypes.func.isRequired
};

export default DisciplineCard;
