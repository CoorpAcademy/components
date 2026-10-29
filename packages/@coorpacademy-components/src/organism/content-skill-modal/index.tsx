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
  const {selectAll, ...listProps} = contentList;
  const buttonLink = selectAll ? {...selectAll, type: 'secondary'} : listProps.buttonLink;
  const {
    isOpen,
    onCancel,
    onConfirm,
    onClose,
    title = 'Add content',
    description = 'Add courses, video, interactive and more to this skill',
    cancelLabel = 'Cancel',
    confirmLabel = 'Add',
    error,
    disabled = false
  } = modal;

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
      text: error,
      isError: Boolean(error),
      cancelButton: {
        onCancel: handleCancel,
        label: cancelLabel
      },
      confirmButton: {
        onConfirm,
        label: confirmLabel,
        iconName: 'plus',
        disabled,
        color: COLORS.cm_primary_blue
      }
    }),
    [handleCancel, onConfirm, cancelLabel, confirmLabel, error, disabled]
  );

  const baseModalProps = {
    title,
    description,
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
          <ListItems {...listProps} buttonLink={buttonLink} />
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
