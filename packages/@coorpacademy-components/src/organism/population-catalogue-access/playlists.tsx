import React, {useCallback} from 'react';
import classnames from 'classnames';
import Tag from '../../atom/tag';
import {CatalogueTag, CustomPlaylistTag} from './types';
import style from './playlists.css';

export const CatalogueChip = ({item, disabled}: {item: CatalogueTag; disabled: boolean}) => {
  const handleRemove = useCallback(() => {
    if (!disabled) item.onRemove?.();
  }, [disabled, item]);
  return (
    <li className={style.chip} title={item.hint}>
      <span
        className={classnames(
          style.tag,
          item.warning && style.warningTag,
          disabled && style.disabled
        )}
      >
        <Tag
          label={item.label}
          detail={item.statusLabel}
          customStyle={{backgroundColor: 'transparent', color: 'inherit', padding: 0}}
          removeAction={
            item.onRemove ? {label: item.removeLabel, onClick: handleRemove, disabled} : undefined
          }
        />
      </span>
    </li>
  );
};

export const CustomChip = ({item}: {item: CustomPlaylistTag}) => {
  const tag = (
    <Tag
      label={item.label}
      customStyle={{
        backgroundColor: 'transparent',
        color: 'inherit',
        padding: 0
      }}
    />
  );
  return (
    <li className={style.chip} title={item.hint}>
      {item.href ? (
        <a
          className={classnames(style.tag, style.customTag, item.warning && style.warningTag)}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tag}
          <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className={classnames(style.tag, style.customTag, item.warning && style.warningTag)}>
          {tag}
        </span>
      )}
    </li>
  );
};
