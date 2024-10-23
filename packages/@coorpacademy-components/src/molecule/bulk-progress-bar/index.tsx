import React from 'react';
import ProgressBar from '../progress-bar';
import StatusItem from '../../atom/status-item';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import {Props, propTypes, Status} from './types';

const {negative: cm_negative_100, cm_primary_blue, positive: cm_positive_100} = COLORS;

const STATUS = {
  inProgress: 'inProgress',
  fail: 'fail'
};

const renderStatusIcon = (status: Status, progress: number) => {
  if (status === STATUS.inProgress)
    return <div role="status" className={style.progressText}>{`${progress} %`}</div>;
  return (
    <div className={style.statusItemWrapper}>
      <StatusItem icon={status === STATUS.fail ? 'invalid' : 'valid'} />
    </div>
  );
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
        displayInfo={false}
      />
      {renderStatusIcon(status, progress)}
    </div>
  );
};

BulkProgressBar.propTypes = propTypes;

export default BulkProgressBar;
