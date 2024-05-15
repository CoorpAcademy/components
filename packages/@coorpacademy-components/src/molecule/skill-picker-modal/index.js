import React, {useMemo, useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {cloneDeep} from 'lodash/fp';
import BaseModal from '../base-modal';
import Chip from '../../atom/chip';
import Loader from '../../atom/loader';
import Provider from '../../atom/provider';
import style from './style.css';

const SkillPickerModal = (props, context) => {
  const {
    skills,
    isOpen,
    isLoading,
    maxSelectedSkills = 6,
    minSelectedSkills = 3,
    onCancel,
    onConfirm,
    onClose
  } = props;
  const {translate} = context;

  const [skillList, setSkillList] = useState([]);

  const handleCancel = useCallback(() => {
    setSkillList(cloneDeep(skills));
    onCancel();
  }, [setSkillList, skills, onCancel]);

  const handleClose = useCallback(() => {
    setSkillList(cloneDeep(skills));
    onClose();
  }, [setSkillList, skills, onClose]);

  const selectedSkills = useMemo(() => skillList.filter(skill => skill.focus), [skillList]);
  const isError = useMemo(
    () => selectedSkills.length > maxSelectedSkills,
    [selectedSkills, maxSelectedSkills]
  );

  const footer = useMemo(() => {
    const footerDescription = isError
      ? translate('skill_focus_footer_error_description', {
          skillNumber: selectedSkills.length - maxSelectedSkills
        })
      : translate('skill_focus_footer_description', {
          skillNumber: minSelectedSkills - selectedSkills.length
        });
    return {
      text:
        isLoading ||
        (selectedSkills.length <= maxSelectedSkills && selectedSkills.length >= minSelectedSkills)
          ? ''
          : footerDescription.replace('.'),
      isError,
      cancelButton: {
        onCancel: handleCancel,
        label: translate('cancel'),
        disabled: isLoading || isError
      },
      confirmButton: {
        onConfirm: () => onConfirm(selectedSkills),
        label: translate('confirm'),
        iconName: 'circle-check',
        disabled: isLoading || isError
      }
    };
  }, [isError, handleCancel, onConfirm, translate, selectedSkills, isLoading, maxSelectedSkills]);

  useEffect(() => {
    if (skills && isOpen) {
      setSkillList(cloneDeep(skills));
    }
  }, [skills, isOpen, setSkillList]);

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
              {`${selectedSkills.length} ${translate('selected')}`}
            </div>
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
              {skillList.map((skill, index) => {
                const {skillTitle, focus} = skill;
                function handleChipClick() {
                  const tempSkillList = cloneDeep(skillList);
                  tempSkillList[index].focus = !tempSkillList[index].focus;
                  setSkillList(tempSkillList);
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
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skillTitle: PropTypes.string,
      skillRef: PropTypes.string,
      focus: PropTypes.boolean
    })
  ),
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  minSelectedSkills: PropTypes.number,
  maxSelectedSkills: PropTypes.number,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

export default SkillPickerModal;
