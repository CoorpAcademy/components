import React, {useCallback, useMemo} from 'react';
import BaseModal from '../../molecule/base-modal';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import type {WebContextValues} from '../../atom/provider/web-context';
import ListItems from '../list-items';
import MultiFilterPanel from '../../molecule/multi-filter-panel';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import propTypes, {ContentSkillModalProps} from './types';

const ContentSkillModal = (props: ContentSkillModalProps, legacyContext: WebContextValues) => {
  const {contentList, filters, modal} = props;
  const {isOpen, onCancel, onConfirm, onClose} = modal;
  const translate = GetTranslateFromContext(legacyContext);

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
        label: translate('cancel')
      },
      confirmButton: {
        onConfirm,
        label: translate('add'),
        iconName: 'plus',
        disabled: false,
        color: COLORS.cm_primary_blue
      }
    }),
    [handleCancel, onConfirm, translate]
  );

  if (!isOpen) return null;

  return (
    <BaseModal
      title={translate('content_skill_modal_title')}
      description={translate('content_skill_modal_description')}
      headerIcon={headerIcon}
      footer={footer}
      isOpen={isOpen}
      onClose={handleClose}
      disableScrollbar
      customStyle={{padding: '24px 0 24px 24px'}}
    >
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
