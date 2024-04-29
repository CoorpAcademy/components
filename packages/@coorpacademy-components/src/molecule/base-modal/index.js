import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atom/icon';
import style from './style.css';

const BaseModal = props => {
  const {title, description, headerIconName, children, isOpen, footer, onClose} = props;

  if (!isOpen || !title || !children) return null;

  function handleOnClose(e) {
    e?.stopPropagation();
    onClose();
  }

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <header className={style.header}>
          {headerIconName ? (
            <div className={style.headerIcon}>
              <Icon
                iconName={headerIconName}
                backgroundColor="#DDD1FF"
                size={{
                  faSize: 20,
                  wrapperSize: 48
                }}
              />
            </div>
          ) : null}
          <div className={style.headerContent}>
            <div className={style.headerTitle}>{title}</div>
            {description ? <div className={style.headerDescription}>{description}</div> : null}
          </div>
          <div className={style.headerCloseIcon} onClick={handleOnClose}>
            <Icon
              iconName="close"
              backgroundColor="#F4F4F5"
              size={{
                faSize: 14,
                wrapperSize: 28
              }}
            />
          </div>
        </header>
        <div className={style.body}>{children}</div>
        {footer ? <div className={style.footer}>{footer()}</div> : null}
      </div>
    </div>
  );
};

BaseModal.propTypes = {
  title: PropTypes.string,
  headerIconName: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  footer: PropTypes.func,
  onClose: PropTypes.func
};

export default BaseModal;
