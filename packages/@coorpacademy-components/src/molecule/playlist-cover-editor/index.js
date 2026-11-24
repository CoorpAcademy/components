import React from 'react';
import PropTypes from 'prop-types';
import InputFileDraggable from '../../atom/input-file-draggable';
import ButtonLink from '../../atom/button-link';
import PlaylistCard from '../playlist-card';
import style from './style.css';

const PlaylistCoverEditor = ({
  title,
  description,
  previewLabel,
  removeLabel,
  onRemove,
  hasImage,
  upload,
  card
}) => (
  <section className={style.container} aria-label={title} data-name="playlist-cover-editor">
    <h2 className={style.title}>{title}</h2>
    <p className={style.description}>{description}</p>
    <div className={style.content}>
      <div className={style.uploadColumn}>
        <div className={style.upload}>
          <InputFileDraggable {...upload} onReset={onRemove} />
        </div>
      </div>
      <div className={style.preview} aria-live="polite" aria-busy={upload.loading}>
        <h3 className={style.previewTitle}>{previewLabel}</h3>
        <div className={style.card}>
          <PlaylistCard {...card} />
        </div>
      </div>
    </div>
    {hasImage || upload.error ? (
      <div className={style.remove}>
        <ButtonLink
          type="text"
          label={removeLabel}
          aria-label={removeLabel}
          onClick={onRemove}
          data-name="remove-playlist-image"
        />
      </div>
    ) : null}
  </section>
);

PlaylistCoverEditor.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  previewLabel: PropTypes.string.isRequired,
  removeLabel: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  hasImage: PropTypes.bool,
  upload: PropTypes.shape(InputFileDraggable.propTypes).isRequired,
  card: PropTypes.shape(PlaylistCard.propTypes).isRequired
};

export default PlaylistCoverEditor;
