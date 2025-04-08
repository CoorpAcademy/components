import React, {useCallback, useEffect, useRef, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {compact, lowerCase, round, isNil} from 'lodash/fp';
import Markdown from 'markdown-to-jsx';
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

const CertificationDetail = (props, context) => {
  const {
    certificationRef,
    title,
    tag,
    description,
    certificationCourses,
    ongoingCoursesAvailable,
    filters,
    onBackClick,
    onContinueLearningClick,
    metrics,
    logoUrl,
    diplomaUrl,
    badgeUrl,
    search
  } = props;
  const descriptionRef = useRef(null);
  const {translate} = context;

  const {progression, mandatoryModules, stars, totalModules} = metrics;

  const [isDescriptionTruncated, setIsDescriptionTruncated] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = useCallback(() => setShowMore(!showMore), [setShowMore, showMore]);

  useEffect(() => {
    if (descriptionRef.current) {
      const {clientHeight = 0, scrollHeight = 0} = descriptionRef.current;
      setIsDescriptionTruncated(scrollHeight > clientHeight);
    }
  }, [description]);

  const Description = useCallback(() => {
    return (
      <div
        ref={descriptionRef}
        className={classnames(style.description, !showMore && style.truncate)}
      >
        <Markdown>{description}</Markdown>
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
            aria-label={translate('back')}
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
            <Tag label={tag} />
            <div className={style.title}>{title}</div>
            {description ? (
              <>
                <Description />
                {isDescriptionTruncated ? (
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
              <span>{`${translate('modules', {count: totalModules})}`}</span>
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
            diplomaUrl && {
              type: 'diploma',
              downloadUrl: diplomaUrl
            },
            badgeUrl && {
              type: 'badge',
              downloadUrl: badgeUrl
            },
            stars && {
              type: 'stars',
              stars
            }
          ])}
        />
        <AllCourses
          content={certificationCourses}
          filters={filters}
          data-name="certification-courses"
          search={search}
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
  tag: PropTypes.string,
  certificationRef: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
  onContinueLearningClick: PropTypes.func,
  search: PropTypes.shape({
    oldValue: PropTypes.string,
    onChange: PropTypes.func
  })
};

export default CertificationDetail;
