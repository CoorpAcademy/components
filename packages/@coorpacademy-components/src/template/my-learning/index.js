import React, {useCallback, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import {convert} from 'css-color-function';
import {get, keys, map, fromPairs, pipe, sumBy} from 'lodash/fp';
import Provider from '../../atom/provider';
import Icon from '../../atom/icon';
import Picture from '../../atom/picture';
import ButtonLink from '../../atom/button-link';
import ToolTip from '../../atom/tooltip';
import ReviewNoSkills from '../../organism/review-no-skills';
import SearchForm from '../../molecule/search-form';
import SkillPickerModal from '../../molecule/skill-picker-modal';
import ResponsiveLearningProfileRadarChart from '../../molecule/learning-profile-radar-chart';
import SkillsChartSideInformationPanel from '../../molecule/skills-chart-side-information-panel';
import LearnerSkillCard from '../../molecule/learner-skill-card';
import searchValueIncluded from '../../util/search-value-included';
import style from './style.css';

const ChangeSkillFocusButton = (props, context) => {
  const [hovered, setHovered] = useState(false);
  const {onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  return (
    <div
      data-name="button-explore-wrapper"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonLink
        customStyle={{
          backgroundColor: hovered
            ? primarySkinColor
            : convert(`color(${primarySkinColor} a(0.07))`),
          color: hovered ? '#FFFFFF' : primarySkinColor,
          transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
        }}
        onClick={onClick}
        label={translate('skills_change_focus')}
        data-name="change-skill-focus-button"
        icon={{
          position: 'left',
          faIcon: {
            name: 'arrows-rotate',
            backgroundColor: hovered
              ? primarySkinColor
              : convert(`color(${primarySkinColor} a(0.07))`),
            color: hovered ? '#FFFFFF' : primarySkinColor,
            size: 16
          }
        }}
      />
    </div>
  );
};

ChangeSkillFocusButton.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ChangeSkillFocusButton.propTypes = {
  onClick: PropTypes.func
};

const FilterButton = (props, context) => {
  const {active, filter, skillTotal, onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  const Content = useCallback(
    () => (
      <div>
        {filter}
        <span
          className={active ? style.skillFilterNumber : style.skillFilterNumberInActive}
          style={{
            backgroundColor: active ? convert(`color(${primarySkinColor} a(0.07))`) : '#EAEAEB',
            color: active ? primarySkinColor : '#515161'
          }}
        >
          {skillTotal}
        </span>
      </div>
    ),
    [filter, skillTotal, active]
  );

  const buttonProps = {
    customStyle: {
      backgroundColor: active ? convert(`color(${primarySkinColor} a(0.07))`) : '#FFFFFF',
      color: active ? primarySkinColor : '#9999A8',
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
      width: filter === translate('review_mode_available') ? '200px' : 'fit-content'
    },
    onClick,
    content: <Content />,
    'data-name': 'change-skill-focus-button'
  };

  return <ButtonLink {...buttonProps} />;
};

FilterButton.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

FilterButton.propTypes = {
  active: PropTypes.bool,
  filter: PropTypes.string,
  skillTotal: PropTypes.number,
  onClick: PropTypes.func
};

const MyLearning = (props, context) => {
  const {
    skills,
    selectedSkills = [],
    skillsInformation,
    skillsLocales,
    learnerFeature = true,
    isLoading,
    onSkillFocusConfirm,
    onReviewSkill,
    onExploreSkill
  } = props;
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);
  const [open, setOpen] = useState(false);
  const [selectedSkillsList, setSelectedSkillsList] = useState(selectedSkills);
  const [skillFocusSelectedOnChart, setSkillFocusSelectedOnChart] = useState(undefined);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(
    skills.sort((a, b) => skillsInformation[b].stats.score - skillsInformation[a].stats.score)
  );
  const [activeFilter, setActiveFilter] = useState('all');

  const skillsReviewReady = useMemo(() => {
    return searchResults.filter(skill => skillsInformation[skill].availableForReview);
  }, [searchResults, skillsInformation]);

  const graphDatas = useMemo(
    () =>
      pipe(
        map(skill => [skill, skillsInformation[skill].stats.score]),
        fromPairs
      )(selectedSkillsList),
    [selectedSkillsList, skillsInformation]
  );

  const graphLegends = useMemo(
    () =>
      pipe(
        map(skill => [skill, skillsLocales[skill]]),
        fromPairs
      )(selectedSkillsList),
    [selectedSkillsList, skillsLocales]
  );

  const filters = useMemo(() => {
    return {
      all: searchResults,
      review: skillsReviewReady
    };
  }, [searchResults, skillsReviewReady]);

  const sumKpi = useCallback(
    kpi =>
      skillFocusSelectedOnChart
        ? skillsInformation[skillFocusSelectedOnChart].stats[kpi]
        : sumBy(skill => skillsInformation[skill].stats[kpi], selectedSkillsList),
    [skillFocusSelectedOnChart, skillsInformation, selectedSkillsList]
  );

  const coursedCompletedData = useMemo(() => sumKpi('coursesCompleted'), [sumKpi]);

  const questionsAnsweredData = useMemo(() => sumKpi('questionsAnswered'), [sumKpi]);

  const learningHoursData = useMemo(() => sumKpi('learningHours'), [sumKpi]);

  const skillChartPaneLegends = useMemo(
    () =>
      translate('skill_scope_specifier', {
        focusedSkill: skillFocusSelectedOnChart
          ? skillsLocales[skillFocusSelectedOnChart]
          : translate('focused_skills')
      }),
    [translate, skillsLocales, skillFocusSelectedOnChart]
  );
  const skillChartPanelProps = [
    {
      title: translate('skill_chart_side_panel_courses_completed'),
      value: `${coursedCompletedData}`,
      legend: skillChartPaneLegends,
      icon: {iconName: 'book-open-cover', backgroundColor: '#D9F4F7'}
    },
    {
      title: translate('skill_chart_side_panel_questions_answered'),
      value: `${questionsAnsweredData}`,
      legend: skillChartPaneLegends,
      icon: {iconName: 'circle-question', backgroundColor: '#FFDCD1'}
    },
    {
      title: translate('skill_chart_side_panel_learning_hours'),
      value: `${learningHoursData}`,
      legend: skillChartPaneLegends,
      icon: {iconName: 'clock', backgroundColor: '#FAD6DE'}
    }
  ];

  const handleOnDotClick = useCallback(
    skillRef => {
      setSkillFocusSelectedOnChart(skillRef);
    },
    [setSkillFocusSelectedOnChart]
  );
  const handleOpenSkillPicker = useCallback(() => setOpen(true), [setOpen]);
  const handleCloseSkillPicker = useCallback(() => setOpen(false), [setOpen]);
  const handleConfirmSkillPicker = useCallback(
    focusSkillList => {
      setSelectedSkillsList(focusSkillList);
      onSkillFocusConfirm(focusSkillList);
      setOpen(false);
    },
    [onSkillFocusConfirm, setSelectedSkillsList, setOpen]
  );
  const handleSearch = useCallback(
    value => {
      setSearchValue(value);
      setSearchResults(skills.filter(skill => searchValueIncluded(skillsLocales[skill], value)));
    },
    [skills, skillsLocales, setSearchValue, setSearchResults]
  );
  const handleSearchReset = useCallback(() => {
    setSearchValue('');
    setSearchResults(skills);
  }, [skills, setSearchValue, setSearchResults]);

  const ReviewTooltipContent = useCallback(
    () => (
      <div>
        <div>
          <b>{translate('review_mode_tooltip_header')}</b>
        </div>
        <p>{translate('review_mode_tooltip_content')}</p>
        <ol>
          <li>{translate('review_mode_tooltip_content_part1')}</li>
          <li>{translate('review_mode_tooltip_content_part2')}</li>
          <li>{translate('review_mode_tooltip_content_part3')}</li>
          <li>{translate('review_mode_tooltip_content_part4')}</li>
        </ol>
      </div>
    ),
    [translate]
  );

  return (
    <div className={style.backgroundContainer}>
      <div className={style.container}>
        <SkillPickerModal
          skills={skills}
          selectedSkills={selectedSkillsList}
          skillsLocales={skillsLocales}
          isOpen={open}
          isLoading={isLoading}
          onCancel={handleCloseSkillPicker}
          onConfirm={handleConfirmSkillPicker}
          onClose={handleCloseSkillPicker}
        />
        {learnerFeature ? (
          <div data-name="skill-focus-container" className={style.skillFocusContainer}>
            <header className={style.skillFocusHeader}>
              <div className={style.skillFocusHeaderWrapper}>
                <div className={style.skillFocusHeaderIcon}>
                  <Icon
                    iconName="bullseye-arrow"
                    backgroundColor="#DDD1FF"
                    borderRadius="12px"
                    size={{faSize: 20, wrapperSize: 48}}
                  />
                </div>
                <div className={style.skillFocusHeaderContent}>
                  <div data-name="skill-focus-title" className={style.skillFocusHeaderTitle}>
                    {translate('skill_focus')}
                  </div>
                  <div
                    data-name="skill-focus-description"
                    className={style.skillFocusHeaderDescription}
                  >
                    {translate('skills_focus_description')}
                  </div>
                </div>
              </div>
              {selectedSkillsList.length >= 3 ? (
                <ChangeSkillFocusButton onClick={handleOpenSkillPicker} />
              ) : null}
            </header>
            {selectedSkillsList.length >= 3 ? (
              <div className={style.skillFocusContent}>
                <div className={style.radarContainer}>
                  <ResponsiveLearningProfileRadarChart
                    totalDataset={1}
                    height={424}
                    width={680}
                    data={graphDatas}
                    legend={graphLegends}
                    onClick={handleOnDotClick}
                    colors={[
                      {
                        gradient: {
                          fill: ['#0062ffff', '#8000ff85'],
                          stroke: ['#0062ffff', '#8000FF']
                        },
                        percentage: {
                          color: primarySkinColor,
                          background: convert(`color(${primarySkinColor} a(0.07))`)
                        },
                        label: {
                          color: '#020202ff'
                        }
                      }
                    ]}
                  />
                </div>
                <SkillsChartSideInformationPanel sidePanelItems={skillChartPanelProps} />
              </div>
            ) : (
              <div className={style.skillFocusEmpty}>
                <Picture
                  className={style.img}
                  src="https://static.coorpacademy.com/assets/images/mylearning-no-skill-selected-placeholder.svg"
                  alt="demo"
                />
                <div className={style.skillFocusEmptyTitle}>
                  {translate('skills_focus_empty_title')}
                </div>
                <div className={style.skillFocusEmptyDescription}>
                  {translate('skills_focus_empty_description')}
                </div>
                <ButtonLink
                  label={translate('skills_choose_focus')}
                  type="primary"
                  customStyle={{width: '168px'}}
                  onClick={handleOpenSkillPicker}
                />
              </div>
            )}
          </div>
        ) : null}
        <header className={style.skillListHeader}>
          <div className={style.skillListHeaderIcon}>
            <Icon
              iconName="dumbbell"
              backgroundColor="#FFF9D1"
              size={{faSize: 20, wrapperSize: 48}}
            />
          </div>
          <div className={style.skillListHeaderContent}>
            <div className={style.skillListHeaderTitle}>{translate('skills_section_title')}</div>
            <div className={style.skillListHeaderDescription}>
              {translate('skills_section_description')}
              <ToolTip
                fontSize={12}
                iconContainerClassName={style.infoIconTooltip}
                tooltipClassName={style.tooltip}
                TooltipContent={ReviewTooltipContent}
                closeToolTipInformationTextAriaLabel={translate(
                  'Press the escape key to close the information text'
                )}
              />
            </div>
          </div>
        </header>
        <div className={style.toolBarContainer}>
          <div className={style.skillFilterContainer}>
            {keys(filters).map((filter, index) => {
              function handleFilterClick() {
                setActiveFilter(filter);
              }

              return (
                <div key={index}>
                  <FilterButton
                    active={activeFilter === filter}
                    filter={
                      filter === 'all' ? translate('all') : translate('review_mode_available')
                    }
                    skillTotal={filters[filter].length}
                    onClick={handleFilterClick}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.searchWrapper}>
            <SearchForm
              search={{
                placeholder: translate('search_place_holder'),
                value: searchValue,
                onChange: handleSearch
              }}
              onReset={handleSearchReset}
            />
          </div>
        </div>
        {searchValue && searchResults.length === 0 ? (
          <div className={style.emptySearchResultContainer}>
            <div className={style.emptySearchResultTitle}>
              {translate('empty_search_result_title', {searchValue})}
            </div>
            <div className={style.emptySearchResultDescription}>
              {translate('empty_search_result_description')}
            </div>
            <div className={style.emptySearchResultClearSearch} onClick={handleSearchReset}>
              {translate('empty_search_result_clear_search')}
            </div>
          </div>
        ) : (
          <div className={style.skillListContainer}>
            {activeFilter === 'review_mode_available' && filters[activeFilter].length === 0 ? (
              <div className={style.skillListEmptyContainer}>
                <ReviewNoSkills
                  titleNoSkills={translate('review_skill_empty')}
                  textNoSkills={translate('review_skill_empty_description')}
                  iconSkillAriaLabel={translate('review_skill_empty')}
                  imagePosition="top"
                />
              </div>
            ) : (
              filters[activeFilter].map((skill, index) => {
                function handleReviewSkill() {
                  onReviewSkill(skill);
                }
                function handleExploreSkill() {
                  onExploreSkill(skill);
                }
                const {
                  score,
                  courses: skillCourses,
                  questionsAnswered: skillQuestions,
                  coursesCompleted: completedCourses
                } = skillsInformation[skill].stats;
                return (
                  <div key={index}>
                    <LearnerSkillCard
                      skillTitle={skillsLocales[skill]}
                      focus={selectedSkills.includes(skill)}
                      metrics={{
                        score,
                        skillCourses,
                        skillQuestions,
                        completedCourses
                      }}
                      review={skillsInformation[skill].availableForReview}
                      onReviewClick={handleReviewSkill}
                      onExploreClick={handleExploreSkill}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

MyLearning.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

MyLearning.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  selectedSkills: PropTypes.arrayOf(PropTypes.string),
  skillsInformation: PropTypes.objectOf(
    PropTypes.shape({
      availableForReview: PropTypes.bool,
      stats: PropTypes.shape({
        score: PropTypes.number,
        courses: PropTypes.number,
        coursesCompleted: PropTypes.number,
        questionsAnswered: PropTypes.number,
        learningHours: PropTypes.number
      })
    })
  ),
  skillsLocales: PropTypes.objectOf(PropTypes.string),
  learnerFeature: PropTypes.bool,
  isLoading: PropTypes.bool,
  onSkillFocusConfirm: PropTypes.func,
  onReviewSkill: PropTypes.func,
  onExploreSkill: PropTypes.func
};

export default MyLearning;
