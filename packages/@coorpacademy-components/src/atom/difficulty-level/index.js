import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import includes from 'lodash/fp/includes';
import {
  NovaCompositionCoorpacademyLevel0,
  NovaCompositionCoorpacademyLevel1,
  NovaCompositionCoorpacademyLevel2,
  NovaCompositionCoorpacademyLevel3
} from '@coorpacademy/nova-icons';
import style from './style.css';

const Icon = ({level = 0}) => {
  switch (level) {
    case 1:
      return <NovaCompositionCoorpacademyLevel1 className={style.icon} />;
    case 2:
      return <NovaCompositionCoorpacademyLevel2 className={style.icon} />;
    case 3:
      return <NovaCompositionCoorpacademyLevel3 className={style.icon} />;
    default:
      return <NovaCompositionCoorpacademyLevel0 className={style.icon} />;
  }
};

Icon.propTypes = {
  level: PropTypes.oneOf([1, 2, 3])
};

const DifficultyLevel = ({level, children}) => (
  <div className={style.inlineContainer}>
    <div
      className={classnames({
        [style.unknownContainer]: !includes(level, [1, 2, 3]),
        [style.easyContainer]: level === 1,
        [style.normalContainer]: level === 2,
        [style.hardContainer]: level === 3
      })}
    >
      <Icon level={level} />
      <span className={style.text}>{children}</span>
    </div>
  </div>
);

DifficultyLevel.propTypes = {
  level: Icon.propTypes.level,
  children: PropTypes.string
};

export default DifficultyLevel;
