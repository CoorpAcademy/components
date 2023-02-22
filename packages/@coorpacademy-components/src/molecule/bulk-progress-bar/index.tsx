import React from 'react';
import ProgressBar from '../progress-bar';
import StatusItem from '../../atom/status-item';
import style from './style.css';
import {Props, propTypes, Status} from './types';

const cm_negative_100 = '#ed3436';
const cm_primary_blue = '#0061FF';
const cm_positive_100 = '#35CC7F';

const STATUS = {
  inProgress: 'inProgress',
  fail: 'fail'
};

const renderStatusIcon = (status: Status, progress: number) => {
  if (status === STATUS.inProgress)
    return <div role="status" className={style.progressText}>{`${progress} %`}</div>;
  return <StatusItem icon={status === STATUS.fail ? 'invalid' : 'valid'} />;
};

const resolveProgressBarColor = (status: Status) => {
  switch (status) {
    case STATUS.fail:
      return cm_negative_100;
    case STATUS.inProgress:
      return cm_primary_blue;
    default:
      return cm_positive_100;
  }
};

const BulkProgressBar = (props: Props) => {
  const {'data-name': dataName, status, progress} = props;

  return (
    <div className={style.container} data-name={dataName}>
      <ProgressBar
        className={style.progressBar}
        value={progress}
        max={100}
        steps={0}
        style={{backgroundColor: resolveProgressBarColor(status), borderRadius: '10px'}}
      />
      {renderStatusIcon(status, progress)}
    </div>
  );
};

BulkProgressBar.propTypes = propTypes;

export default BulkProgressBar;
