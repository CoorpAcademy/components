import React, {useMemo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import BaseModal from '../base-modal';
import Chip from '../../atom/chip';
import Loader from '../../atom/loader';
import Provider from '../../atom/provider';
import style from './style.css';

const SkillPickerModal = (props, context) => {
  const {skills, isOpen, isLoading, maxSelectedSkills = 6, onCancel, onConfirm, onClose} = props;
  const {translate} = context;

  const [skillList, setSkillList] = useState(skills);
  const selectedSkills = useMemo(() => skillList.filter(skill => skill.focus), [skillList]);
  const isError = useMemo(
    () => selectedSkills.length > maxSelectedSkills,
    [selectedSkills, maxSelectedSkills]
  );

  const footer = useMemo(() => {
    const footerDescription = isError
      ? translate('skill_focus_footer_error_description').replace(
          '.',
          selectedSkills.length - maxSelectedSkills
        )
      : translate('skill_focus_footer_description').replace(
          '.',
          maxSelectedSkills - selectedSkills.length
        );
    return {
      text:
        isLoading || selectedSkills.length === maxSelectedSkills
          ? ''
          : footerDescription.replace('.'),
      isError,
      cancelButton: {
        onCancel,
        label: translate('cancel'),
        disabled: isLoading || isError
      },
      confirmButton: {
        onConfirm,
        label: translate('confirm'),
        iconName: 'circle-check',
        disabled: isLoading || isError
      }
    };
  }, [isError, onCancel, onConfirm, translate, selectedSkills, isLoading, maxSelectedSkills]);

  useEffect(() => {
    if (skills) {
      setSkillList(skills);
    }
  }, [skills]);

  if (!isLoading && !skills) return null;

  return (
    <BaseModal
      title={translate('skill_focus')}
      description={translate('skill_focus_description')}
      isOpen={isOpen}
      onClose={onClose}
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
              {skills.map((skill, index) => {
                const {skillTitle, focus} = skill;
                function handleChipClick() {
                  const tempSkillList = [...skillList];
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
      focus: PropTypes.boolean
    })
  ),
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  maxSelectedSkills: PropTypes.number,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

export default SkillPickerModal;
