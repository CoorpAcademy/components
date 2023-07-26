import React from 'react';
import style from './style.css';
import propTypes, {EmptyStateBulkInspectProps} from './types';

const EmptyStateBulkInspect = (props: EmptyStateBulkInspectProps) => {
  const {firstMessage, secondMessage} = props;
  return (
    <div className={style.container}>
      <span className={style.firstMessage}>{firstMessage}</span>
      <span className={style.secondMessage}>{secondMessage}</span>
    </div>
  );
};

EmptyStateBulkInspect.propTypes = propTypes;

export default EmptyStateBulkInspect;
