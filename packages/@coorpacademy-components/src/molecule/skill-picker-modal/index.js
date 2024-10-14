import React, {useMemo, useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {filter, some, sortBy} from 'lodash/fp';
import BaseModal from '../base-modal';
import Chip from '../../atom/chip';
import Loader from '../../atom/loader';
import Select from '../../atom/select';
import Provider from '../../atom/provider';
import style from './style.css';

const SkillPickerModal = (props, context) => {
  const {
    skills,
    selectedSkills,
    skillsLocales,
    skillsScore,
    isOpen,
    isLoading,
    maxSelectedSkills = 6,
    minSelectedSkills = 3,
    onCancel,
    onConfirm,
    onClose
  } = props;
  const {translate} = context;

  const [sortedSkills, setSortedSkills] = useState(sortBy(skill => skillsLocales[skill], skills));
  const [currentSort, setCurrentSort] = useState('alphabetical');
  const [selectedSkillList, setSelectedSkillList] = useState(selectedSkills);

  const handleCancel = useCallback(() => {
    setSelectedSkillList(selectedSkills);
    onCancel();
  }, [setSelectedSkillList, selectedSkills, onCancel]);

  const handleClose = useCallback(() => {
    setSelectedSkillList(selectedSkills);
    onClose();
  }, [setSelectedSkillList, selectedSkills, onClose]);

  const skillProgressAvailable = some(skill => skillsScore[skill] > 0, skills);

  const skillList = useMemo(() => {
    return sortedSkills.map(skill => {
      return {
        skillTitle: skillsLocales[skill],
        skillRef: skill,
        focus: selectedSkillList.includes(skill),
        score: skillsScore[skill]
      };
    });
  }, [sortedSkills, selectedSkillList, skillsLocales, skillsScore]);

  const isError = useMemo(
    () =>
      selectedSkillList.length > maxSelectedSkills || selectedSkillList.length < minSelectedSkills,
    [selectedSkillList, maxSelectedSkills, minSelectedSkills]
  );

  const footer = useMemo(() => {
    const footerDescription =
      selectedSkillList.length > maxSelectedSkills
        ? translate('skill_focus_footer_error_description', {
            skillNumber: selectedSkillList.length - maxSelectedSkills
          })
        : translate('skill_focus_footer_description', {
            skillNumber: minSelectedSkills - selectedSkillList.length
          });
    return {
      text: isLoading || !isError ? '' : footerDescription,
      isError,
      cancelButton: {
        onCancel: handleCancel,
        label: translate('cancel'),
        disabled: isLoading || isError
      },
      confirmButton: {
        onConfirm: () => onConfirm(selectedSkillList),
        label: translate('confirm'),
        iconName: 'circle-check',
        disabled: isLoading || isError
      }
    };
  }, [
    isError,
    handleCancel,
    onConfirm,
    translate,
    selectedSkillList,
    isLoading,
    maxSelectedSkills,
    minSelectedSkills
  ]);

  const sorting = useMemo(
    () => ({
      theme: 'skillDetail',
      options: ['alphabetical', 'progress'].map(value => ({
        name: translate(value),
        value,
        selected: currentSort === value
      })),
      onChange: value => setCurrentSort(value)
    }),
    [currentSort, translate]
  );

  useEffect(() => {
    // eslint-disable-next-line lodash-fp/no-extraneous-function-wrapping
    setSortedSkills(prev =>
      sortBy(
        skill => (currentSort === 'progress' ? -skillsScore[skill] : skillsLocales[skill]),
        prev
      )
    );
  }, [currentSort, skillsScore, skillsLocales, setSortedSkills]);

  if ((!isLoading && !skills) || !isOpen) return null;

  return (
    <BaseModal
      title={translate('skill_focus')}
      description={translate('skill_focus_description')}
      isOpen={isOpen}
      onClose={handleClose}
      footer={footer}
      headerIcon={{
        name: 'bullseye-arrow',
        backgroundColor: '#DDD1FF'
      }}
    >
      <div className={style.skillPickerContainer}>
        {isLoading ? (
          <div className={style.loaderContainer}>
            <Loader className={style.loader} theme="coorpmanager" />
          </div>
        ) : (
          <>
            <div className={style.ctaWrapper}>
              <div>{`${selectedSkillList.length} ${translate('selected')}`}</div>
              {skillProgressAvailable ? (
                <div className={style.sortWrapper}>
                  {translate('sort_by')}
                  <Select {...sorting} aria-label="All courses sort" />
                </div>
              ) : null}
            </div>
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
              {skillList.map((skill, index) => {
                const {skillTitle, skillRef, focus, score} = skill;
                function handleChipClick() {
                  const newSelectedSkillList = focus
                    ? filter(selectedSkill => selectedSkill !== skillRef, selectedSkillList)
                    : [...selectedSkillList, skill.skillRef];
                  setSelectedSkillList(newSelectedSkillList);
                }

                return (
                  <Chip
                    {...(skillProgressAvailable ? {subText: `${score.toFixed(1)}%`} : {})}
                    text={skillTitle}
                    selected={focus}
                    onClick={handleChipClick}
                    key={index}
                    backgroundColor="skin"
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </BaseModal>
  );
};

SkillPickerModal.contextTypes = {
  translate: Provider.childContextTypes.translate
};

SkillPickerModal.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  selectedSkills: PropTypes.arrayOf(PropTypes.string),
  skillsLocales: PropTypes.objectOf(PropTypes.string),
  skillsScore: PropTypes.objectOf(PropTypes.number),
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  minSelectedSkills: PropTypes.number,
  maxSelectedSkills: PropTypes.number,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

export default SkillPickerModal;
