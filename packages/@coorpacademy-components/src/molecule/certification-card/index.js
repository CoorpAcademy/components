import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import style from './style.css';

const CertificationCard = (props, context) => {
  const {label, goal, progress} = props;
  const {title, condition: {nbDone}} = goal;
  const {translate} = context;

  return (
    <div className={style.container}>
      
    </div>
  );
};

CertificationCard.contextTypes = {
  translate: Provider.childContextTypes.translate
};

CertificationCard.propTypes = {
  label: PropTypes.string,
  goal: PropTypes.shape({
    title: PropTypes.string,
    condition: PropTypes.shape({
      nbDone: PropTypes.number,
    }),
  }),
  progress: PropTypes.number,
};

export default CertificationCard;