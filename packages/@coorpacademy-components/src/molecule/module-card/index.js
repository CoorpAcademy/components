import React from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import classnames from 'classnames';
import ModuleBubble from '../module-bubble';
import Provider from '../../atom/provider';
import style from './style.css';

function ModuleCard(props, context) {
  const {skin} = context;
  const {label, level, onClick} = props;

  const iconColor = getOr('#00B0FF', ['common', 'primary'], skin);
  return (
    <div className={style.default} data-name="module-card" onClick={onClick}>
      <div
        className={classnames(style.title, style.innerHTML)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: label}}
      />
      <div className={style.level}>{level}</div>
      <div className={style.module}>
        <ModuleBubble {...props} iconColor={iconColor} onClick={onClick} />
      </div>
    </div>
  );
}

ModuleCard.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

ModuleCard.contextTypes = {
  skin: Provider.childContextTypes.skin
};
export default ModuleCard;
