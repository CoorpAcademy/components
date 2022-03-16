import React from 'react';
import style from '../../../image-upload/style.css';

export default {
  props: {
    modified: false,
    previewContent: {
      type: 'image',
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491560495763.svg'
    },
    title: 'Desktop (*)',
    displayName: 'Upload image',
    uploadLabel: 'Upload'
  },
  // eslint-disable-next-line react/display-name
  children: (onDragStart, onDragStop) => (
    <input
      className={style.input}
      key="1"
      type="file"
      accept="image*/"
      onChange={() => true}
      onDragEnter={onDragStart}
      onDrop={onDragStop}
      onDragLeave={onDragStop}
    />
  )
};
