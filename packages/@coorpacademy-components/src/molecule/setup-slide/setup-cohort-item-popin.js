import React from 'react';
import PropTypes from 'prop-types';
import style from './popinstyle.css';

const SetupCohortItemPopin = props => {
  const {header, content} = props;

  return (
    <div className={style.disable}>
      <div className={style.popin}>
        <div className={style.header} data-name="popin-header">
          {header}
        </div>
        <div className={style.content}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

SetupCohortItemPopin.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string
};

export default SetupCohortItemPopin;
