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
    <label className={style.default}>
      <div
        className={style.box}
        style={{
          background: background || '#3d3d3d'
        }}
      >
        {choice.selected ? <Check className={style.icon} /> : null}
        <Checkbox
          className={style.input}
          checked={choice.selected}
          onChange={handleChange}
          data-name={label}
        />
      </div>
      <span title={label} className={style.label}>
        {label}
      </span>
    </label>
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
