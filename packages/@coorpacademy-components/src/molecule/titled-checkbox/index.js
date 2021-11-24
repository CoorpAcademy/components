import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyCheck as Check} from '@coorpacademy/nova-icons';
import {ColorPropType} from '../../util/proptypes';
import Checkbox from '../../atom/checkbox';
import style from './style.css';

const TitledCheckbox = props => {
  const {choice, background, onToggle} = props;
  const label = choice.name;
  const handleChange = useMemo(() => () => onToggle(choice), [onToggle, choice]);

  return (
    <div className={style.default}>
      <label
        className={style.box}
        style={{
          background: background || '#3d3d3d'
        }}
      >
        {choice.selected ? <Check className={style.icon} color="white" /> : null}
        <Checkbox
          className={style.input}
          checked={choice.selected}
          titleStyle={'default'}
          onChange={handleChange}
        />
      </label>
      <span title={label} className={style.label}>
        {label}
      </span>
    </div>
  );
};

TitledCheckbox.propTypes = {
  choice: PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }).isRequired,
  background: ColorPropType,
  onToggle: PropTypes.func.isRequired
};

export default TitledCheckbox;
