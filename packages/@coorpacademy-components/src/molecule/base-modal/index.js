import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, get, debounce} from 'lodash/fp';
import {convert} from 'css-color-function';
import Provider from '../../atom/provider';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const BaseModal = (props, context) => {
  const {
    title,
    description,
    headerIcon,
    children,
    isOpen,
    footer,
    onClose,
    onScroll,
    detectScrollbar = false,
    customStyle
  } = props;
  const {skin} = context;
  const bodyRef = useRef(null);
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(!detectScrollbar);

  const checkScrollbar = () => {
    const bodyElement = bodyRef.current;
    if (bodyElement) {
      setIsScrollbarVisible(bodyElement.scrollHeight > bodyElement.clientHeight);
    }
  };

  useEffect(() => {
    if (!detectScrollbar) return;
    const bodyElement = bodyRef.current;

    if (!bodyElement) return;

    const debouncedCheckScrollbar = debounce(100, () => {
      checkScrollbar();
    });

    // Observer of the body content
    const mutationObserver = new MutationObserver(() => {
      debouncedCheckScrollbar();
    });

    mutationObserver.observe(bodyElement, {childList: true, subtree: true});

    // Observer of the body size
    const resizeObserver = new ResizeObserver(() => {
      debouncedCheckScrollbar();
    });

    if (bodyRef.current) {
      resizeObserver.observe(bodyRef.current);
    }

    checkScrollbar();

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
      debouncedCheckScrollbar.cancel();
    };
  }, [children, detectScrollbar]);

  const Footer = useCallback(() => {
    if (isEmpty(footer)) return null;
    if (typeof footer === 'function') return footer();

    const {cancelButton, confirmButton, text, isError} = footer;
    const {label: cancelLabel, onCancel, disabled: cancelDisabled} = cancelButton || {};
    const {
      label: confirmLabel,
      onConfirm,
      disabled: confirmDisabled,
      iconName,
      color
    } = confirmButton || {};
    const buttonConfirmColor = color || get('common.primary', skin);

    return (
      <div className={style.footer}>
        <div className={style.footerCTAWrapper}>
          {onCancel && cancelLabel ? (
            <ButtonLink
              {...{
                className: style.button,
                type: 'secondary',
                onClick: onCancel,
                label: cancelLabel,
                disabled: cancelDisabled,
                'data-testid': `button-link-${cancelLabel}`
              }}
            />
          ) : null}
          {onConfirm && confirmLabel ? (
            <div>
              <ButtonLink
                {...{
                  customStyle: {backgroundColor: buttonConfirmColor, paddingLeft: '16px'},
                  hoverBackgroundColor: convert(
                    `hsl(from ${buttonConfirmColor} h s calc(l*(1 - 0.08)))`
                  ),
                  hoverColor: COLORS.white,
                  className: style.button,
                  type: 'primary',
                  onClick: onConfirm,
                  label: confirmLabel,
                  disabled: confirmDisabled,
                  ...(iconName
                    ? {
                        icon: {
                          position: 'left',
                          faIcon: {
                            name: iconName,
                            color: COLORS.white,
                            size: 14,
                            customStyle: {padding: 0}
                          }
                        }
                      }
                    : {}),
                  'data-testid': `button-link-${confirmLabel}`
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
  }, [footer, skin]);

  if (!isOpen || !title || !children) return null;

  function handleOnClose(e) {
    e?.stopPropagation();
    onClose();
  }

  return (
    <div className={style.modalWrapper} data-testid="modal">
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
          <div className={style.headerCloseIcon} onClick={handleOnClose} data-testid="close-icon">
            <Icon iconName="close" backgroundColor="#F4F4F5" size={{faSize: 14, wrapperSize: 28}} />
          </div>
        </header>
        <div
          ref={bodyRef}
          className={isScrollbarVisible ? style.body : style.bodyWithoutScrollbar}
          onScroll={onScroll}
          data-testid="modal-body"
          style={customStyle}
        >
          {children}
        </div>
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
        disabled: PropTypes.bool,
        color: PropTypes.string
      })
    })
  ]),
  onClose: PropTypes.func,
  onScroll: PropTypes.func,
  detectScrollbar: PropTypes.bool,
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default BaseModal;
