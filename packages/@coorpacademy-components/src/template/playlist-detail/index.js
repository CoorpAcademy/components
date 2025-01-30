import React, {useCallback, useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {isNil} from 'lodash/fp';
import Markdown from 'markdown-to-jsx';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import Select, {SelectOptionPropTypes} from '../../atom/select';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Icon from '../../atom/icon';
import CardsGrid from '../../organism/cards-grid';
import AllCourses from '../skill-detail/all-courses';
import PlaylistDetailCover from '../../molecule/playlist-detail-cover';
import {ContinueLearningButton} from '../skill-detail';
import style from './style.css';

const PlaylistDetail = (props, context) => {
  const {
    title,
    coverImages,
    playlistRef,
    description,
    ongoingCoursesAvailable,
    playlistCourses,
    filters,
    sorting,
    onBackClick,
    onContinueLearningClick,
    bannerMicrolearningRuleAction = null
  } = props;
  const descriptionRef = useRef(null);
  const {translate} = context;

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

  return (
    <div className={style.backgroundContainer}>
      <div className={style.container} data-name={playlistRef}>
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
          <div className={style.coverWrapper}>
            <PlaylistDetailCover images={coverImages} />
          </div>
          <div>
            <Tag label={translate('playlist')} />
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
            <div className={style.continueLearningButton}>
              <ContinueLearningButton
                ongoingCoursesAvailable={ongoingCoursesAvailable}
                onClick={onContinueLearningClick}
              />
            </div>
          </div>
        </div>
        <AllCourses
          content={playlistCourses}
          filters={filters}
          sorting={sorting}
          bannerMicrolearning={{
            type: 'playlist',
            action: bannerMicrolearningRuleAction
          }}
        />
      </div>
    </div>
  );
};

PlaylistDetail.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

PlaylistDetail.propTypes = {
  title: PropTypes.string.isRequired,
  coverImages: PlaylistDetailCover.propTypes.images,
  playlistRef: PropTypes.string.isRequired,
  description: PropTypes.string,
  ongoingCoursesAvailable: PropTypes.bool,
  playlistCourses: PropTypes.shape(CardsGrid.propTypes),
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
  }),
  sorting: PropTypes.shape(Select.propTypes),
  onBackClick: PropTypes.func,
  onContinueLearningClick: PropTypes.func,
  bannerMicrolearningRuleAction: PropTypes.func
};

export default PlaylistDetail;
