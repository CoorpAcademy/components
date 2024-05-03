import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const BaseModal = props => {
  const {title, description, headerIcon, children, isOpen, footer, onClose} = props;

  const Footer = useCallback(() => {
    if (!footer) return null;
    if (typeof footer === 'function') return footer();

    const {cancelButton, confirmButton, text, isError} = footer;

    if (!cancelButton && !confirmButton && !text) return null;

    return (
      <div className={style.footer}>
        <div className={style.footerCTAWrapper}>
          {cancelButton?.onCancel && cancelButton?.label ? (
            <ButtonLink
              {...{
                customStyle: {
                  width: '94px'
                },
                type: 'secondary',
                onClick: cancelButton.onCancel,
                label: cancelButton.label,
                disabled: cancelButton.disabled
              }}
            />
          ) : null}
          {confirmButton?.onConfirm && confirmButton?.label ? (
            <ButtonLink
              {...{
                customStyle: {
                  width: '121px'
                },
                type: 'primary',
                onClick: confirmButton.onConfirm,
                label: confirmButton?.label,
                disabled: confirmButton?.disabled,
                ...(confirmButton?.iconName
                  ? {
                      icon: {
                        position: 'left',
                        faIcon: {
                          name: confirmButton?.iconName,
                          color: '#FFFFFF',
                          size: 16
                        }
                      }
                    }
                  : null)
              }}
            />
          ) : null}
        </div>
        {text ? <div className={isError && style.footerDescriptionError}>{text}</div> : null}
      </div>
    );
  }, [footer]);

  if (!isOpen || !title || !children) return null;

  function handleOnClose(e) {
    e?.stopPropagation();
    onClose();
  }

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <header className={style.header}>
          {headerIcon && headerIcon.name ? (
            <div className={style.headerIcon}>
              <Icon
                iconName={headerIcon.name}
                iconColor={headerIcon.color}
                backgroundColor={headerIcon.backgroundColor}
                size={{faSize: 20, wrapperSize: 48}}
              />
            </div>
          ) : null}
          <div className={style.headerContent}>
            <div className={style.headerTitle}>{title}</div>
            {description ? <div className={style.headerDescription}>{description}</div> : null}
          </div>
          <div className={style.headerCloseIcon} onClick={handleOnClose}>
            <Icon iconName="close" backgroundColor="#F4F4F5" size={{faSize: 14, wrapperSize: 28}} />
          </div>
        </header>
        <div className={style.body}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

BaseModal.propTypes = {
  title: PropTypes.string,
  headerIcon: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
  }),
  description: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  footer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      text: PropTypes.string,
      isError: PropTypes.boolean,
      cancelButton: PropTypes.shape({
        label: PropTypes.string,
        onCancel: PropTypes.func,
        disabled: PropTypes.bool
      }),
      confirmButton: PropTypes.shape({
        label: PropTypes.string,
        onConfirm: PropTypes.func,
        iconName: PropTypes.string,
        disabled: PropTypes.bool
      })
    })
  ]),
  onClose: PropTypes.func
};

export default BaseModal;
