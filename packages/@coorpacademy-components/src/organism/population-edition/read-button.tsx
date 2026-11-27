import React, {useCallback} from 'react';
import ButtonLink from '../../atom/button-link';
import {ReadAction} from './types';

export const ReadButton = ({action, disabled}: {action: ReadAction; disabled: boolean}) => {
  const onClick = useCallback(() => {
    if (!disabled && !action.disabled) action.onClick();
  }, [action, disabled]);
  return (
    <ButtonLink
      type="secondary"
      label={action.label}
      disabled={disabled || action.disabled}
      onClick={onClick}
      customStyle={{width: 'auto'}}
    />
  );
};
