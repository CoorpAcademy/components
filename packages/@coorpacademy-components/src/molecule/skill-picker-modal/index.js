import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
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
    isError,
    footerDescription,
    onSkillClick,
    onCancel,
    onConfirm,
    onClose
  } = props;
  const {translate} = context;

  const footer = useMemo(() => {
    return {
      text: isLoading ? '' : footerDescription,
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
  }, [footerDescription, isError, onCancel, onConfirm, translate]);

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
            <div style={{marginBottom: '16px'}}>7 {translate('selected')}</div>
            <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
              {skills.map((skill, index) => {
                function handleChipClick() {
                  onSkillClick && onSkillClick(skill);
                }

                return (
                  <Chip
                    text={skill.name}
                    selected={skill.selected}
                    onClick={handleChipClick}
                    key={index}
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
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      selected: PropTypes.boolean
    })
  ),
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  footerDescription: PropTypes.string,
  onSkillClick: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

export default SkillPickerModal;
