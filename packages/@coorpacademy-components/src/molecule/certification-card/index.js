import React from 'react';
import PropTypes from 'prop-types';
import {COLORS} from '../../variables/colors';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import ProgressBar from '../progress-bar';
import style from './style.css';

const CertificationCard = (props, context) => {
  const {
    type,
    label,
    locales: {conditionDescriptionProgress, tag},
    goal: {title},
    progress,
    imgUrl,
    onClick
  } = props;
  if (type !== 'certification') return null;
  const {translate} = context;
  const isInprogress = progress < 100;
  const progressLabel = isInprogress ? translate('in_progress') : translate('completed');
  const progressTagType = isInprogress ? 'progress' : 'success';

  const progressIconProps = {
    position: 'left',
    iconName: isInprogress ? 'clock' : 'circle-check',
    iconColor: isInprogress ? '#B87A00' : '#05944F',
    backgroundColor: isInprogress ? '#FFEECC' : '#D6F5E5',
    size: {
      faSize: 10,
      wrapperSize: 10
    },
    customStyle: {padding: 0}
  };
  const certificationIcon = {iconName: 'wreath-laurel'};
  return (
    <div className={style.container} data-name={`certification-card-${label}`} onClick={onClick}>
      {progress > 0 ? (
        <Tag
          label={progressLabel}
          type={progressTagType}
          customStyle={{position: 'absolute', top: '12px', right: '12px'}}
          icon={progressIconProps}
        />
      ) : null}
      <div className={style.imageSection}>
        <div className={style.imageContainer}>
          <img src={imgUrl} />
        </div>
      </div>
      <div className={style.detailWrapper}>
        <div className={style.titleWrapper}>
          <Tag label={tag} size="S" icon={certificationIcon} />
          <div className={style.title} data-name="certification-title">
            {title}
          </div>
          <div
            className={style.moduleCount}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: conditionDescriptionProgress}}
          />
        </div>
        <ProgressBar
          className={style.customProgressBar}
          style={{backgroundColor: COLORS.cm_positive_500}}
          displayInfo={false}
          value={progress}
          max={100}
        />
      </div>
    </div>
  );
};

CertificationCard.contextTypes = {
  translate: Provider.childContextTypes.translate
};

CertificationCard.propTypes = {
  type: PropTypes.oneOf(['certification']).isRequired,
  label: PropTypes.string,
  goal: PropTypes.shape({
    title: PropTypes.string,
    condition: PropTypes.shape({
      nbDone: PropTypes.number
    })
  }),
  progress: PropTypes.number,
  imgUrl: PropTypes.string,
  onClick: PropTypes.func,
  locales: PropTypes.shape({
    conditionDescriptionProgress: PropTypes.string,
    tag: PropTypes.string
  })
};

export default CertificationCard;
