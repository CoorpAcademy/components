import React, {useCallback, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {compact, lowerCase, round, isNil} from 'lodash/fp';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import {SelectOptionPropTypes} from '../../atom/select';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Icon from '../../atom/icon';
import CardsGrid from '../../organism/cards-grid';
import AllCourses from '../skill-detail/all-courses';
import {ContinueLearningButton} from '../skill-detail';
import ProgressWrapper from '../../molecule/progress-wrapper';
import style from './style.css';

const DESCRIPTION_BREAKPOINT = 382;

const CertificationDetail = (props, context) => {
  const {
    certificationRef,
    title,
    description,
    certificationCourses,
    ongoingCoursesAvailable,
    filters,
    onBackClick,
    onContinueLearningClick,
    metrics,
    logoUrl,
    diplomaUrl,
    badgeUrl
  } = props;
  const {translate} = context;
  const {progression, mandatoryModules, stars, totalModules} = metrics;

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = useCallback(() => setShowMore(!showMore), [setShowMore, showMore]);

  const Description = useCallback(() => {
    return (
      <div className={classnames(style.description, !showMore && style.truncate)}>
        {description}
      </div>
    );
  }, [showMore, description]);

  const completedModules = useMemo(
    () => round((mandatoryModules * progression) / 100),
    [mandatoryModules, progression]
  );

  return (
    <div className={style.backgroundContainer}>
      <div className={style.container} data-name={certificationRef}>
        {!isNil(onBackClick) ? (
          <ButtonLinkIcon
            faIcon="arrow-left"
            data-name="back-button"
            aria-label="Back"
            onClick={onBackClick}
            className={style.backButton}
            tooltipPlacement="right"
          />
        ) : null}
        <div className={style.ctaContainer}>
          <div className={style.logoContainer}>
            <img className={style.logo} src={logoUrl} />
          </div>
          <div>
            <Tag label={translate('certification')} />
            <div className={style.title}>{title}</div>
            {description ? (
              <>
                <Description />
                {description.length >= DESCRIPTION_BREAKPOINT ? (
                  <div className={style.showMoreWrapper} onClick={handleShowMore}>
                    {translate(showMore ? 'Show less' : 'Show more')}
                    <Icon
                      iconName={showMore ? 'chevron-up' : 'chevron-down'}
                      size={{faSize: 14, wrapperSize: 16}}
                    />
                  </div>
                ) : null}
              </>
            ) : null}
            <div className={style.contentStats}>
              <span>{`${totalModules} ${lowerCase(translate('modules'))}`}</span>
            </div>
            <ContinueLearningButton
              ongoingCoursesAvailable={ongoingCoursesAvailable}
              onClick={onContinueLearningClick}
            />
          </div>
        </div>
        <ProgressWrapper
          title={translate('your_progress')}
          subtitle={translate('certification_progress_wrapper_subtitle')}
          progression={progression}
          completedModules={completedModules}
          mandatoryModules={mandatoryModules}
          sections={compact([
            {
              type: 'diploma',
              downloadUrl: diplomaUrl
            },
            badgeUrl && {
              type: 'badge',
              downloadUrl: badgeUrl
            },
            {
              type: 'stars',
              stars
            }
          ])}
        />
        <AllCourses
          content={certificationCourses}
          filters={filters}
          data-name="certification-courses"
        />
      </div>
    </div>
  );
};

CertificationDetail.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

CertificationDetail.propTypes = {
  title: PropTypes.string.isRequired,
  certificationRef: PropTypes.string.isRequired,
  description: PropTypes.string,
  logoUrl: PropTypes.string,
  metrics: PropTypes.shape({
    progression: PropTypes.number,
    stars: PropTypes.number,
    mandatoryModules: PropTypes.number,
    totalModules: PropTypes.number
  }),
  diplomaUrl: PropTypes.string,
  badgeUrl: PropTypes.string,
  ongoingCoursesAvailable: PropTypes.bool,
  certificationCourses: PropTypes.shape(CardsGrid.propTypes),
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
  }),
  onBackClick: PropTypes.func,
  onContinueLearningClick: PropTypes.func
};

export default CertificationDetail;
