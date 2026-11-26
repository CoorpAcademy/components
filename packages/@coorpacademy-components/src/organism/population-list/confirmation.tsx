import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {escape} from 'lodash/fp';
import CMPopin from '../../molecule/cm-popin';
import {ArchiveConfirmation} from './types';
import style from './confirmation.css';

const controls = (root: HTMLElement) =>
  [...root.querySelectorAll<HTMLElement>('button, a[href], [tabindex="0"]')].filter(
    element =>
      element.tabIndex >= 0 &&
      !element.matches(':disabled') &&
      !element.closest('[hidden], [inert]')
  );

const ArchiveDialog = ({
  model,
  fallback
}: {
  model: ArchiveConfirmation;
  fallback: React.RefObject<HTMLElement>;
}) => {
  const root = useRef<HTMLDivElement>(null);
  const cancelLabel = useRef(model.labels.cancel);
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement;
    const fallbackElement = fallback.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = root.current as HTMLElement;
    const cancel = controls(dialog).find(
      element => element.getAttribute('aria-label') === cancelLabel.current
    );
    (cancel || dialog).focus();
    const keepFocus = (event: FocusEvent) => {
      if (!dialog.contains(event.target as Node)) dialog.focus();
    };
    document.addEventListener('focusin', keepFocus);
    return () => {
      document.removeEventListener('focusin', keepFocus);
      document.body.style.overflow = previousOverflow;
      const target = trigger.isConnected ? trigger : fallbackElement;
      if (target?.isConnected) target.focus({preventScroll: true});
    };
  }, [fallback]);
  const cancel = useCallback(() => {
    if (!model.busy) model.onCancel();
  }, [model]);
  const confirm = useCallback(() => {
    if (!model.busy) model.onConfirm();
  }, [model]);
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        cancel();
      }
      if (event.key === 'Tab') {
        const dialog = root.current as HTMLElement;
        const buttons = controls(dialog);
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (!first) {
          event.preventDefault();
          dialog.focus();
        } else if (event.shiftKey && (event.target === first || event.target === dialog)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (event.target === last || event.target === dialog)) {
          event.preventDefault();
          first.focus();
        }
      }
    },
    [cancel]
  );
  return (
    <div
      className={style.dialog}
      role="dialog"
      aria-modal="true"
      aria-label={model.labels.title}
      aria-busy={Boolean(model.busy)}
      ref={root}
      tabIndex={-1}
      onKeyDown={onKeyDown}
    >
      <CMPopin
        className={style.overlay}
        contentClassName={style.panel}
        closeAriaLabel={model.labels.close}
        content={model.labels.title}
        descriptionText={escape(model.labels.description)}
        icon={{iconName: 'box-archive', iconColor: 'currentColor'}}
        onClose={model.busy ? undefined : cancel}
        warning={model.error}
        firstButton={{
          type: 'secondary',
          label: model.labels.cancel,
          'aria-label': model.labels.cancel,
          handleOnclick: cancel,
          disabled: model.busy
        }}
        secondButton={{
          type: 'dangerous',
          label: model.labels.confirm,
          handleOnclick: confirm,
          disabled: model.busy
        }}
      />
    </div>
  );
};

export const PopulationConfirmation = (props: {
  model: ArchiveConfirmation;
  fallback: React.RefObject<HTMLElement>;
}) => {
  // Mount-only UI state keeps the portal compatible with server rendering.
  // Confirmation visibility, request state and population data stay controlled by App.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(<ArchiveDialog {...props} />, document.body) : null;
};
