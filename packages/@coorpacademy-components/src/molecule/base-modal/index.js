import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, get} from 'lodash/fp';
import {convert} from 'css-color-function';
import Provider from '../../atom/provider';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const BaseModal = (props, context) => {
  const {title, description, headerIcon, children, isOpen, footer, onClose} = props;
  const {skin} = context;

  const [hovered, setHovered] = useState(false);
  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);
  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const Footer = useCallback(() => {
    if (isEmpty(footer)) return null;
    if (typeof footer === 'function') return footer();

    const {cancelButton, confirmButton, text, isError} = footer;
    const {label: cancelLabel, onCancel, disabled: cancelDisabled} = cancelButton || {};
    const {
      label: confirmLabel,
      onConfirm,
      disabled: confirmDisabled,
      iconName
    } = confirmButton || {};
    const primarySkinColor = get('common.primary', skin);

    return (
      <div className={style.footer}>
        <div className={style.footerCTAWrapper}>
          {onCancel && cancelLabel ? (
            <ButtonLink
              {...{
                className: style.footerCancelButton,
                type: 'secondary',
                onClick: onCancel,
                label: cancelLabel,
                disabled: cancelDisabled
              }}
            />
          ) : null}
          {onConfirm && confirmLabel ? (
            <div>
              <ButtonLink
                {...{
                  customStyle: {
                    backgroundColor: hovered
                      ? convert(`hsl(from ${primarySkinColor} h s calc(l*(1 - 0.08)))`)
                      : primarySkinColor
                  },
                  className: style.footerConfirmButton,
                  type: 'primary',
                  onClick: onConfirm,
                  label: confirmLabel,
                  disabled: confirmDisabled,
                  onMouseOver: handleMouseOver,
                  onMouseLeave: handleMouseLeave,
                  ...(iconName
                    ? {
                        icon: {
                          position: 'left',
                          faIcon: {
                            name: iconName,
                            color: '#FFFFFF',
                            size: 16
                          }
                        }
                      }
                    : {})
                }}
              />
            </div>
          ) : null}
        </div>
        {text ? (
          <div
            className={`${style.footerDescription} ${isError ? style.footerDescriptionError : ''}`}
          >
            {text}
          </div>
        ) : null}
      </div>
    );
  }, [footer, hovered, handleMouseOver, handleMouseLeave, skin]);

  if (!isOpen || !title || !children) return null;

  function handleOnClose(e) {
    e?.stopPropagation();
    onClose();
  }

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <header className={style.header}>
          {headerIcon?.name ? (
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

BaseModal.contextTypes = {
  skin: Provider.childContextTypes.skin
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
