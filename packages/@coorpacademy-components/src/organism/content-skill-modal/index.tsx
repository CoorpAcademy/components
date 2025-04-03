import React, {useCallback, useMemo} from 'react';
import BaseModal from '../../molecule/base-modal';
import ListItems from '../list-items';
import MultiFilterPanel from '../../molecule/multi-filter-panel';
import Provider from '../../atom/provider';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import propTypes, {ContentSkillModalProps} from './types';

const ContentSkillModal = (props: ContentSkillModalProps) => {
  const {contentList, filters, modal} = props;
  const {isOpen, onCancel, onConfirm, onClose} = modal;

  const handleCancel = useCallback(() => {
    onCancel();
  }, [onCancel]);
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const headerIcon = {
    name: 'circle-plus',
    color: '#0051D6',
    backgroundColor: '#D6E6FF'
  };
  const footer = useMemo(
    () => ({
      cancelButton: {
        onCancel: handleCancel,
        label: 'Cancel'
      },
      confirmButton: {
        onConfirm,
        label: 'Add',
        iconName: 'plus',
        disabled: false,
        color: COLORS.cm_primary_blue
      }
    }),
    [handleCancel, onConfirm]
  );
  const baseModal = {
    title: 'Add content',
    description: 'Add courses, video, interactive and more to this skill',
    headerIcon,
    footer,
    isOpen,
    onClose: handleClose,
    customStyle: {padding: '0 0 0 24px'}
  };

  if (!isOpen) return null;

  return (
    <BaseModal {...baseModal}>
      <div className={style.container}>
        <div className={style.containerList}>
          <ListItems {...contentList} />
        </div>
        <div className={style.filtersContainer}>
          <MultiFilterPanel {...filters} />
        </div>
      </div>
    </BaseModal>
  );
};

ContentSkillModal.contextTypes = {
  translate: Provider.childContextTypes.translate
};

ContentSkillModal.propTypes = propTypes;

export default ContentSkillModal;
