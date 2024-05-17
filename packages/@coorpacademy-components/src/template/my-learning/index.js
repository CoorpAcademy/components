import React, {useCallback, useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {convert} from 'css-color-function';
import {getOr} from 'lodash/fp';
import style from './style.css';
import Provider from '../../atom/provider';
import Icon from '../../atom/icon';
import Picture from '../../atom/picture';
import ButtonLink from '../../atom/button-link';
import ToolTip from '../../atom/tooltip';
import SkillPickerModal from '../../molecule/skill-picker-modal';
import ResponsiveLearningProfileRadarChart from '../../molecule/learning-profile-radar-chart';
import SkillsChartSideInformationPanel from '../../molecule/skills-chart-side-information-panel';
import LearnerSkillCard from '../../molecule/learner-skill-card';

const ChangeSkillFocusButton = (props, context) => {
  const [hovered, setHovered] = useState(false);
  const {onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = getOr('#0061FF', 'common.primary', skin);

  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const buttonProps = {
    customStyle: {
      backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
      color: hovered ? '#FFFFFF' : primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    onClick,
    label: translate('change_skill_focus'),
    'data-name': 'change-skill-focus-button',
    icon: {
      position: 'left',
      faIcon: {
        name: 'arrows-rotate',
        backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
        color: hovered ? '#FFFFFF' : primarySkinColor,
        size: 16
      }
    }
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-name="button-explore-wrapper"
    >
      <ButtonLink {...buttonProps} />
    </div>
  );
};

ChangeSkillFocusButton.contextTypes = {
  translate: Provider.childContextTypes.translate
};

ChangeSkillFocusButton.propTypes = {
  onClick: PropTypes.func
};

const FilterButton = (props, context) => {
  const {active, filter, skillTotal, onClick} = props;
  const {skin, translate} = context;
  const primarySkinColor = getOr('#0061FF', 'common.primary', skin);

  const Content = useCallback(
    () => (
      <div>
        {filter}
        <span className={active ? style.skillFilterNumber : style.skillFilterNumberInActive}>
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
      width: filter === translate('review') ? '198px' :'fit-content'
    },
    onClick,
    content: <Content />,
    'data-name': 'change-skill-focus-button'
  };

  return <ButtonLink {...buttonProps} />;
};

FilterButton.contextTypes = {
  translate: Provider.childContextTypes.translate
};

FilterButton.propTypes = {
  active: PropTypes.bool,
  filter: PropTypes.string,
  skillTotal: PropTypes.number,
  onClick: PropTypes.func
};

const MyLearning = (props, context) => {
  const {skills, selectedSkills, skillsStats, skillsLocales, skillsFilters, isLoading, onSkillFocusConfirm, onReviewSkill, onExploreSkill} = props;
  const {translate} = context;
  const [open, setOpen] = useState(false);
  const [selectedSkillsList, setSelectedSkillsList] = useState([...selectedSkills]);
  const [skillFocusSelected, setSkillFocusSelected] = useState(undefined);
  const [activeFilter, setActiveFilter] = useState('all');

  const skillsReviewReady = useMemo(() =>  {
    return skills.filter(skill => skillsFilters[skill].review);
  }, [skills, skillsFilters]);

  const graphDatas = useMemo(() => {
    const data = {};
    selectedSkillsList.forEach((skill) => (data[skill] = skillsStats[skill].score));
    return data;
  }, [selectedSkillsList, skillsStats]);

  const graphLegends = useMemo(() => {
    const data = {};
    selectedSkillsList.forEach((skill) => (data[skill] = skillsLocales[skill]));
    return data;
  }, [selectedSkillsList, skillsLocales]);

  const filters = [
    {
      name: 'all',
      skills: skills,
    }, 
    {
      name: 'review',
      skills: skillsReviewReady,
    }
  ]

  const coursedCompletedData = useMemo(
    () =>
      skillFocusSelected
        ? skillsStats[skillFocusSelected].coursesCompleted
        : selectedSkillsList.reduce((sum, skill) => sum + skillsStats[skill].coursesCompleted, 0),
    [skillFocusSelected, skillsStats, selectedSkillsList, skillFocusSelected]
  );

  const questionsAnsweredData = useMemo(
    () =>
      skillFocusSelected
        ? skillsStats[skillFocusSelected].questionsAnswered
        : selectedSkillsList.reduce((sum, skill) => sum + skillsStats[skill].questionsAnswered, 0),
    [skillFocusSelected, skillsStats, selectedSkillsList, skillFocusSelected]
  );

  const learningHoursData = useMemo(
    () =>
      skillFocusSelected
        ? skillsStats[skillFocusSelected].learningHours
        : selectedSkillsList.reduce((sum, skill) => sum + skillsStats[skill].learningHours, 0),
    [skillFocusSelected, skillsStats, selectedSkillsList, skillFocusSelected]
  );

  const skillChartPaneLegends = useMemo(
    () => translate('on', {focusedSkill: skillFocusSelected ? skillsLocales[skillFocusSelected] : translate('focused_skills')}),
    [translate, skillsLocales, skillFocusSelected]
  );
  const skillChartPanelProps = [
    {
      title: translate('courses_completed'),
      value: coursedCompletedData,
      legend: skillChartPaneLegends,
      icon: {iconName: 'book-open-cover', backgroundColor: '#D9F4F7'}
    },
    {
      title: translate('questions_answered'),
      value: questionsAnsweredData,
      legend: skillChartPaneLegends,
      icon: {iconName: 'circle-question', backgroundColor: '#FFDCD1'}
    },
    {
      title: translate('learning_hours'),
      value: learningHoursData,
      legend: skillChartPaneLegends,
      icon: {iconName: 'clock', backgroundColor: '#FAD6DE'}
    }
  ];

  const handleOnDotClick = useCallback(
    skillRef => setSkillFocusSelected(skillRef),
    [setSkillFocusSelected]
  );
  const handleOpenSkillPicker = useCallback(() => setOpen(true), [setOpen]);
  const handleCloseSkillPicker = useCallback(() => setOpen(false), [setOpen]);
  const handleConfirmSkillPicker = useCallback(
    focusSkillList => {
      setSelectedSkillsList(focusSkillList)
      onSkillFocusConfirm(focusSkillList);
      setOpen(false);
    },
    [onSkillFocusConfirm, setSelectedSkillsList, setOpen]
  );

  const TooltipContent = useCallback(
    () => (
      <div>
        <div>
          <b>{translate('review_mode_tooltip_header')}</b>
        </div>
        <p>{translate('review_mode_tooltip_content')}</p>
        <ol>
          <li>{translate('Choose 1 Skill')}</li>
          <li>{translate('Answer 5 Questions')}</li>
          <li>{translate('You have Infinite Lives')}</li>
          <li>{translate('Get it all right')}</li>
        </ol>
      </div>
    ),
    [translate]
  );

  return (
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
      <div className={style.skillFocusContainer}>
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
              <div className={style.skillFocusHeaderTitle}>{translate('skill_focus')}</div>
              <div className={style.skillFocusHeaderDescription}>
                {translate('skills_focus_description')}
              </div>
            </div>
          </div>
            {selectedSkillsList.length > 0 ? (
              <ChangeSkillFocusButton onClick={handleOpenSkillPicker} />
            ) : null}
        </header>
        {selectedSkillsList.length > 0 ? (
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
                      color: '#0061FF',
                      background:
                        'linear-gradient(180deg, rgba(0, 97, 255, 0.10) 0%, rgba(147, 107, 255, 0.10) 100%)'
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
              src={
                'https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg'
              }
              alt={'demo'}
            />
            <div className={style.skillFocusEmptyTitle}>{translate('skill_focus_empty_title')}</div>
            <div className={style.skillFocusEmptyDescription}>
              {translate('skills_focus_empty_description')}
            </div>
            <ButtonLink
              customStyle={{
                width: '168px'
              }}
              type={'primary'}
              onClick={handleOpenSkillPicker}
              label={translate('choose_your_focus')}
            />
          </div>
        )}
      </div>
      <header className={style.skillListHeader}>
        <div className={style.skillListHeaderIcon}>
          <Icon
            iconName="dumbbell"
            backgroundColor="#FFF9D1"
            size={{faSize: 20, wrapperSize: 48}}
          />
        </div>
        <div className={style.skillListHeaderContent}>
          <div className={style.skillListHeaderTitle}>{translate('skills')}</div>
          <div className={style.skillListHeaderDescription}>
            {translate('Explore or review skills')}
            <ToolTip
              fontSize={12}
              iconContainerClassName={style.infoIconTooltip}
              tooltipClassName={style.tooltip}
              TooltipContent={TooltipContent}
              closeToolTipInformationTextAriaLabel={translate(
                'Press the escape key to close the information text'
              )}
            />
          </div>
        </div>
      </header>
      <div className={style.skillFilterContainer}>
        {filters.map((filter, index) => {
          function handleFilterClick() {
            setActiveFilter(filter.name);
          }

          return (
            <div key={index}>
              <FilterButton
                active={activeFilter === filter.name}
                filter={translate(filter.name)}
                skillTotal={filter.skills.length}
                onClick={handleFilterClick}
              />
            </div>
          );
        })}
      </div>
      <div className={style.skillListContainer}>
        {skills.map((skill, index) => {
          if (activeFilter === 'review' && !skillsFilters[skill].review) return null;
          function handleReviewSkill() {
            onReviewSkill(skill);
          }
          function handleExploreSkill() {
            onExploreSkill(skill);
          }
          return (
            <div key={index}>
              <LearnerSkillCard
                skillTitle={skillsLocales[skill]}
                focus={selectedSkills.includes(skill)}
                metrics={{
                  skillCourses: skillsStats[skill].courses,
                  skillQuestions: skillsStats[skill].questionsAnswered,
                  completedCourses: skillsStats[skill].coursesCompleted
                }}
                review={skillsFilters[skill].review}
                onReviewClick={handleReviewSkill}
                onExploreClick={handleExploreSkill}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

MyLearning.contextTypes = {
  translate: Provider.childContextTypes.translate
};

MyLearning.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  selectedSkills: PropTypes.arrayOf(PropTypes.string),
  skillsStats: PropTypes.objectOf(
    PropTypes.shape({
      score: PropTypes.number,
      courses: PropTypes.number,
      coursesCompleted: PropTypes.number,
      questionsAnswered: PropTypes.number,
      learningHours: PropTypes.number,
    })
  ),
  skillsFilters: PropTypes.objectOf(
    PropTypes.shape({
      review: PropTypes.boolean,
    })
  ),
  skillsLocales: PropTypes.objectOf(PropTypes.string),
  isLoading: PropTypes.bool,
  onSkillFocusConfirm: PropTypes.func,
  onReviewSkill: PropTypes.func,
  onExploreSkill: PropTypes.func
};

export default MyLearning;
