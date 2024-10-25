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

const DetailSection = ({index, type, isLocked, badgeUrl, onDownload, stars}, context) => {
  const {translate} = context;
  const isStars = type === 'stars';

  const DownloadButton = (
    <ButtonLink
      label={translate('download')}
      onClick={onDownload}
      data-name="download-button"
      aria-label="download button"
      customStyle={{backgroundColor: '#F1F6FE'}}
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

  return isStars ? (
    <div className={style[`detailsSection${index}`]}>
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
    <div className={style[`detailsSection${index}`]}>
      <img
        className={style.img}
        src={
          badgeUrl ||
          'https://s3.eu-west-1.amazonaws.com/static.coorpacademy.com/assets/images/diploma.svg'
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
  {completedCourses, completedModules, title, subtitle, progression, sections},
  context
) => {
  const {translate} = context;
  const modulesCompletedLocal = translate('modules_completed');
  const isLocked = progression !== 100;

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <Title type="form-group" titleSize="medium" title={title} subtitle={subtitle} />
      </div>
      <div className={style.statscontainer}>
        <div className={style.stats}>
          <div>
            <span className={style.statsNumber}>{completedCourses}</span>
            {translate('courses_completed')}
          </div>
          <div className={style.divider} />
          <div className={style.statsModule}>
            <span className={style.statsNumber}>{completedModules}</span>
            {modulesCompletedLocal}
          </div>
        </div>
        <div className={style.progression}>
          <span className={style.statsNumber}>{progression}%</span>
        </div>
      </div>
      <ProgressBar
        className={style.customProgressBar}
        style={{backgroundColor: COLORS.positive}}
        displayInfo={false}
        value={progression}
        max={100}
      />
      <div className={style.statsMobile}>
        <div className={style.statsModuleMobile}>
          <span className={style.statsNumber}>{completedModules}</span>
          {modulesCompletedLocal}
        </div>
        <div className={style.statsProgressionMobile}>
          <span className={style.statsNumber}>{progression}%</span>
        </div>
      </div>

      {isEmpty(sections) ? null : (
        <div className={style.details}>
          {uncappedMap(
            ({type, stars, badgeUrl, onDownload}, index) => (
              <DetailSection
                {...{type, isLocked, badgeUrl, onDownload, stars}}
                key={`${type}-${index}`}
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

DetailSection.contextTypes = {
  translate: Provider.childContextTypes.translate
};

DetailSection.propTypes = {
  index: PropTypes.number,
  type: PropTypes.oneOf(['diploma', 'badge', 'stars']),
  isLocked: PropTypes.bool,
  badgeUrl: PropTypes.string,
  onDownload: PropTypes.func,
  stars: PropTypes.number
};

ProgressWrapper.contextTypes = {
  translate: Provider.childContextTypes.translate
};

ProgressWrapper.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  completedCourses: PropTypes.number,
  completedModules: PropTypes.number,
  progression: PropTypes.number,
  sections: PropTypes.arrayOf(PropTypes.shape(DetailSection.propTypes))
};

export default ProgressWrapper;
