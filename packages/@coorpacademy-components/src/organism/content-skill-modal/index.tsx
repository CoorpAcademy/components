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
    color: COLORS.primary_600,
    backgroundColor: COLORS.primary_100
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

  const baseModalProps = {
    title: 'Add content',
    description: 'Add courses, video, interactive and more to this skill',
    headerIcon,
    footer,
    isOpen,
    onClose: handleClose,
    // fullscreen modal
    customStyle: {
      height: '80vh',
      width: '80vw'
    }
  };

  if (!isOpen) return null;

  return (
    <BaseModal {...baseModalProps}>
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
