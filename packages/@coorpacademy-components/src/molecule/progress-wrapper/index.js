import React, {useCallback, useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {convert} from 'css-color-function';
import {isEmpty, map, get} from 'lodash/fp';
import Title from '../../atom/title';
import ProgressBar from '../progress-bar';
import {COLORS} from '../../variables/colors';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import Provider, {GetSkinFromContext} from '../../atom/provider';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const uncappedMap = map.convert({cap: false});

const DetailSection = ({index, type, isLocked, downloadUrl, stars}, context) => {
  const {translate} = context;
  const skin = GetSkinFromContext(context);
  const primarySkinColor = get('common.primary', skin);
  const isTypeStars = type === 'stars';

  const downloadButtonProps = {
    label: translate('download'),
    link: {
      target: '_blank',
      href: downloadUrl
    },
    'data-name': `download-${type}-button`,
    'aria-label': `download ${type} button`,
    customStyle: {
      backgroundColor: convert(`color(${primarySkinColor} a(0.07))`),
      color: primarySkinColor,
      width: 'auto',
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    hoverBackgroundColor: primarySkinColor,
    hoverColor: COLORS.white,
    icon: {
      position: 'left',
      faIcon: {
        name: 'download',
        color: primarySkinColor,
        size: 14,
        customStyle: {padding: 0}
      }
    },
    disabled: isLocked
  };

  return isTypeStars ? (
    <div
      className={style[`detailsSection${index}`]}
      data-name={type}
      aria-label={`${type} informations`}
    >
      <div className={style.detailsInfo}>
        <div className={style.detailsInfoText}>
          <span className={style.detailsTitle}>{translate('bonus_stars')}</span>
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
        </div>

        <div className={style.buttonContainer}>
          <ButtonLink {...downloadButtonProps} />
        </div>
      </div>
    </div>
  );
};

const ProgressWrapper = (
  {completedModules, mandatoryModules, title, subtitle, progression, sections},
  context
) => {
  const {translate} = context;
  const mandatoryCompletedModulesLocale = translate('modules_completed_mandatory', {
    total: mandatoryModules,
    count: completedModules > mandatoryModules ? mandatoryModules : completedModules
  });
  const isLocked = progression !== 100;

  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = useCallback(() => {
    setShowDetails(!showDetails);
  }, [showDetails]);
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
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: mandatoryCompletedModulesLocale}}
          />
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

      {!isEmpty(sections) ? (
        <>
          <div
            className={style.toggleDetailsButton}
            onClick={handleToggleDetails}
            data-testid="progress-wrapper-toggle-details-button"
          >
            <div className={style.toggleDetailsLabel}>
              <span className={style.toggleDetailsTitle}>{translate('rewards')}</span>
              {isLocked ? (
                <Tag
                  label={translate('locked')}
                  size="S"
                  icon={{
                    position: 'left',
                    iconName: 'lock',
                    iconColor: COLORS.cm_grey_500,
                    preset: 's',
                    customStyle: {padding: 0}
                  }}
                />
              ) : null}
            </div>
            <Icon
              iconColor={COLORS.cm_grey_700}
              iconName={showDetails ? 'chevron-up' : 'chevron-down'}
              size={{faSize: 20, wrapperSize: 24}}
            />
          </div>

          <div
            className={classNames(
              style.details,
              showDetails ? style.visibleDetails : style.hiddenDetails
            )}
            data-testid="progress-wrapper-details"
          >
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
        </>
      ) : null}
    </div>
  );
};

const commonDetailSectionPropTypes = {
  type: PropTypes.oneOf(['diploma', 'badge', 'stars']),
  downloadUrl: PropTypes.string,
  stars: PropTypes.number
};

DetailSection.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
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
