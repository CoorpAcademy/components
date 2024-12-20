import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map} from 'lodash/fp';
import Title from '../../atom/title';
import ProgressBar from '../progress-bar';
import {COLORS} from '../../variables/colors';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import Provider from '../../atom/provider';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const uncappedMap = map.convert({cap: false});

const DetailSection = ({index, type, isLocked, downloadUrl, stars}, context) => {
  const {translate} = context;
  const isTypeStars = type === 'stars';

  const DownloadButton = (
    <ButtonLink
      label={translate('download')}
      link={{
        target: '_blank',
        href: downloadUrl
      }}
      data-name={`download-${type}-button`}
      aria-label={`download ${type} button`}
      customStyle={{backgroundColor: '#F1F6FE', color: '#0061FF', width: 'auto'}}
      icon={{
        position: 'left',
        faIcon: {
          name: 'download',
          color: '#0061FF',
          size: 14,
          customStyle: {padding: 0}
        }
      }}
      disabled={isLocked}
    />
  );

  const LockedTag = (
    <Tag
      label="Locked"
      size="S"
      icon={{
        position: 'left',
        iconName: 'lock',
        iconColor: '#515161',
        preset: 's',
        customStyle: {padding: 0}
      }}
    />
  );

  return isTypeStars ? (
    <div
      className={style[`detailsSection${index}`]}
      data-name={type}
      aria-label={`${type} informations`}
    >
      <div className={style.detailsInfo}>
        <div className={style.detailsInfoText}>
          <span className={style.detailsTitle}>{translate('bonus_stars')}</span>
          {isLocked ? LockedTag : null}
        </div>
        <div className={style.stars}>
          <Icon iconName="star" iconColor="#FFCE0A" backgroundColor="#FFF9D1" preset="xl" />
          <span>{stars}</span>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={style[`detailsSection${index}`]}
      data-name={type}
      aria-label={`${type} informations`}
    >
      <img
        className={style.img}
        src={
          type === 'badge'
            ? downloadUrl
            : 'https://s3.eu-west-1.amazonaws.com/static.coorpacademy.com/assets/images/diploma.svg'
        }
      />
      <div className={style.detailsInfo}>
        <div className={style.detailsInfoText}>
          <span className={style.detailsTitle}>
            {type === 'diploma' ? translate('diploma') : translate('badge')}
          </span>
          {isLocked ? LockedTag : null}
        </div>

        <div className={style.buttonContainer}>{DownloadButton}</div>
      </div>
    </div>
  );
};

const ProgressWrapper = (
  {completedModules, mandatoryModules, title, subtitle, progression, sections},
  context
) => {
  const {translate} = context;
  const mandatoryCompletedModulesLocale = translate('modules_completed_mandatory');
  const isLocked = progression !== 100;

  return (
    <div
      className={style.container}
      data-name="prgress-wrapper"
      aria-label="progress wrapper section"
    >
      <div className={style.titleContainer}>
        <Title type="form-group" titleSize="medium" title={title} subtitle={subtitle} />
      </div>
      <div className={style.statscontainer}>
        <div className={style.stats}>
          <div>
            <span className={style.statsNumber} data-name="progress-stats">
              {`${
                completedModules > mandatoryModules ? mandatoryModules : completedModules
              } / ${mandatoryModules}`}
            </span>
            {mandatoryCompletedModulesLocale}
          </div>
        </div>
        <div className={style.progression}>
          <span className={style.statsNumber} data-name="progress-value">
            {progression}%
          </span>
        </div>
      </div>
      <ProgressBar
        className={style.customProgressBar}
        style={{backgroundColor: COLORS.positive}}
        displayInfo={false}
        value={progression}
        max={100}
      />
      <div className={style.statsProgressionMobile}>
        <span className={style.statsNumber}>{progression}%</span>
      </div>

      {isEmpty(sections) ? null : (
        <div className={style.details}>
          {uncappedMap(
            (section, index) => (
              <DetailSection
                {...section}
                isLocked={isLocked}
                key={`${section.type}-${index}`}
                index={index}
              />
            ),
            sections
          )}
        </div>
      )}
    </div>
  );
};

const commonDetailSectionPropTypes = {
  type: PropTypes.oneOf(['diploma', 'badge', 'stars']),
  downloadUrl: PropTypes.string,
  stars: PropTypes.number
};

DetailSection.contextTypes = {
  translate: Provider.childContextTypes.translate
};

DetailSection.propTypes = {
  index: PropTypes.number,
  isLocked: PropTypes.bool,
  ...commonDetailSectionPropTypes
};

ProgressWrapper.contextTypes = {
  translate: Provider.childContextTypes.translate
};

ProgressWrapper.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  completedModules: PropTypes.number,
  mandatoryModules: PropTypes.number,
  progression: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.shape(commonDetailSectionPropTypes))
};

export default ProgressWrapper;
