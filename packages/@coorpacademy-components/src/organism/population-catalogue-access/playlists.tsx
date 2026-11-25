import React, {useCallback} from 'react';
import Tag from '../../atom/tag';
import {COLORS} from '../../variables/colors';
import {CatalogueTag, CustomPlaylistTag} from './types';
import style from './playlists.css';

export const CatalogueChip = ({item, disabled}: {item: CatalogueTag; disabled: boolean}) => {
  const handleRemove = useCallback(() => {
    if (!disabled) item.onRemove?.();
  }, [disabled, item]);
  return (
    <li className={style.chip}>
      <Tag
        label={item.label}
        type={item.warning ? 'warning' : 'info'}
        customStyle={{borderRadius: 6, padding: '6px 10px'}}
        icon={item.warning ? {iconName: 'eye-slash', preset: 's'} : undefined}
        removeAction={
          item.onRemove ? {label: item.removeLabel, onClick: handleRemove, disabled} : undefined
        }
      />
      {item.hint ? <span className={style.hint}>{item.hint}</span> : null}
    </li>
  );
};

export const CustomChip = ({item}: {item: CustomPlaylistTag}) => {
  const tag = (
    <Tag
      label={item.label}
      type="advanced"
      customStyle={{
        backgroundColor: COLORS.purple_100,
        color: COLORS.purple_700,
        borderRadius: 6,
        padding: '6px 10px'
      }}
      icon={
        item.warning
          ? {iconName: 'eye-slash', preset: 's', iconColor: COLORS.cm_orange_800}
          : undefined
      }
    />
  );
  return (
    <li className={style.chip}>
      {item.href ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {tag}
        </a>
      ) : (
        tag
      )}
      {item.hint ? <span className={style.hint}>{item.hint}</span> : null}
    </li>
  );
};
