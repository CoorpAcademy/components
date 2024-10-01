import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {get} from 'lodash/fp';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import Select, {SelectOptionPropTypes} from '../../atom/select';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import CardsGrid from '../../organism/cards-grid';
import AllCourses from '../skill-detail/all-courses';
import ContinueLearning from '../skill-detail/continue-learning';
import PlaylistDetailCover from '../../molecule/playlist-detail-cover';
import style from './style.css';

const DESCRIPTION_BREAKPOINT = 382;

const ContinueLearningButton = (props, context) => {
  const {ongoingCoursesAvailable, onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  return (
    <div>
      <ButtonLink
        label={
          ongoingCoursesAvailable ? translate('continue_learning') : translate('start_learning')
        }
        type="primary"
        customStyle={{
          width: 'fit-content',
          borderRadius: '12px',
          backgroundColor: primarySkinColor
        }}
        hoverBackgroundColor={convert(`hsl(from ${primarySkinColor} h s calc(l*(1 - 0.08)))`)}
        hoverColor="#FFFFFF"
        icon={{
          position: 'left',
          faIcon: {
            name: 'play',
            color: '#FFFFFF',
            size: 16
          }
        }}
        onClick={onClick}
      />
    </div>
  );
};

ContinueLearningButton.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ContinueLearningButton.propTypes = {
  ongoingCoursesAvailable: PropTypes.bool,
  onClick: PropTypes.func
};

const PlaylistDetail = (props, context) => {
  const {
    title,
    coverImages,
    playlistRef,
    description,
    ongoingCourses,
    playlistCourses,
    totalCourses,
    filters,
    sorting,
    onBackClick,
    onContinueLearningClick
  } = props;
  const {translate} = context;

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = useCallback(() => setShowMore(!showMore), [setShowMore, showMore]);

  const Description = useCallback(() => {
    return (
      <div className={classnames(style.description, !showMore && style.truncate)}>
        {description}
      </div>
    );
  }, [showMore, description]);

  return (
    <div className={style.backgroundContainer}>
      <div className={style.container} data-name={playlistRef}>
        <div className={style.backButtonWrapper} onClick={onBackClick}>
          <Icon
            iconName="arrow-left"
            size={{
              faSize: 14,
              wrapperSize: 14
            }}
          />
        </div>
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
                {description.length >= DESCRIPTION_BREAKPOINT ? (
                  <div className={style.showMoreWrapper} onClick={handleShowMore}>
                    {showMore ? translate('Show less') : translate('Show more')}
                    <Icon
                      iconName={showMore ? 'chevron-up' : 'chevron-down'}
                      size={{
                        faSize: 14,
                        wrapperSize: 16
                      }}
                    />
                  </div>
                ) : null}
              </>
            ) : null}
            <div className={style.continueLearningButton}>
              <ContinueLearningButton
                ongoingCoursesAvailable={!!ongoingCourses.list.length}
                onClick={onContinueLearningClick}
              />
            </div>
          </div>
        </div>
        <ContinueLearning ongoingCourses={ongoingCourses} />
        <AllCourses
          courses={playlistCourses}
          totalCourses={totalCourses}
          filters={filters}
          sorting={sorting}
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
  coverImages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['podcast', 'video', 'interactive', 'document']),
      url: PropTypes.string
    })
  ),
  playlistRef: PropTypes.string.isRequired,
  description: PropTypes.string,
  ongoingCourses: PropTypes.shape(CardsGrid.propTypes),
  playlistCourses: PropTypes.shape(CardsGrid.propTypes),
  totalCourses: PropTypes.number,
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
  }),
  sorting: PropTypes.shape(Select.propTypes),
  onBackClick: PropTypes.func,
  onContinueLearningClick: PropTypes.func
};

export default PlaylistDetail;
