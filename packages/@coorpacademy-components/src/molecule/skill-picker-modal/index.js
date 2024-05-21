import React, {useMemo, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/fp/filter';
import BaseModal from '../base-modal';
import Chip from '../../atom/chip';
import Loader from '../../atom/loader';
import Provider from '../../atom/provider';
import style from './style.css';

const SkillPickerModal = (props, context) => {
  const {
    skills,
    selectedSkills,
    skillsLocales,
    isOpen,
    isLoading,
    maxSelectedSkills = 6,
    minSelectedSkills = 3,
    onCancel,
    onConfirm,
    onClose
  } = props;
  const {translate} = context;

  const [selectedSkillList, setSelectedSkillList] = useState(selectedSkills);

  const handleCancel = useCallback(() => {
    setSelectedSkillList(selectedSkills);
    onCancel();
  }, [setSelectedSkillList, selectedSkills, onCancel]);

  const handleClose = useCallback(() => {
    setSelectedSkillList(selectedSkills);
    onClose();
  }, [setSelectedSkillList, selectedSkills, onClose]);

  const skillList = useMemo(() => {
    return skills.map(skill => {
      return {
        skillTitle: skillsLocales[skill],
        skillRef: skill,
        focus: selectedSkillList.includes(skill)
      };
    });
  }, [skills, selectedSkillList, skillsLocales]);

  const isError = useMemo(
    () => selectedSkillList.length > maxSelectedSkills,
    [selectedSkillList, maxSelectedSkills]
  );

  const footer = useMemo(() => {
    const footerDescription = isError
      ? translate('skill_focus_footer_error_description', {
          skillNumber: selectedSkillList.length - maxSelectedSkills
        })
      : translate('skill_focus_footer_description', {
          skillNumber: minSelectedSkills - selectedSkillList.length
        });
    return {
      text:
        isLoading ||
        (selectedSkillList.length <= maxSelectedSkills &&
          selectedSkillList.length >= minSelectedSkills)
          ? ''
          : footerDescription.replace('.'),
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
            <div style={{marginBottom: '16px'}}>
              {`${selectedSkillList.length} ${translate('selected')}`}
            </div>
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
              {skillList.map((skill, index) => {
                const {skillTitle, skillRef, focus} = skill;
                function handleChipClick() {
                  const newSelectedSkillList = focus
                    ? filter(selectedSkill => selectedSkill !== skillRef, selectedSkillList)
                    : [...selectedSkillList, skill.skillRef];
                  setSelectedSkillList(newSelectedSkillList);
                }

                return (
                  <Chip text={skillTitle} selected={focus} onClick={handleChipClick} key={index} />
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
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  minSelectedSkills: PropTypes.number,
  maxSelectedSkills: PropTypes.number,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

export default SkillPickerModal;
