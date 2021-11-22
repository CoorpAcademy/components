import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../bullet-point-menu-button';
import style from './style.css';

const CustomPlaylist = props => {
  const {title, label, type, editButtonOnClick, bulletPointButtonOnClick, buttons} = props;
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        <div>
          {type === 'revision' ? (
            <>
              <Tag label="Ongoing changs" type="revision" />
              <Tag label="Published" type="published" />
            </>
          ) : (
            <Tag label={label} type={type} />
          )}
        </div>
        <div className={style.edit}>
          <ButtonLink
            type="secondary"
            label="Edit"
            ariaLabel="aria button"
            dataName="default-button"
            icon={{
              position: 'left',
              type: 'edit'
            }}
            onClick={editButtonOnClick}
          />
        </div>
        <BulletPointMenuButton
          buttonAriaLabel="aria button"
          menuAriaLabel="aria menu"
          buttons={buttons}
          onClick={bulletPointButtonOnClick}
        />
      </div>
    </div>
  );
};

CustomPlaylist.propTypes = {
  bulletPointButtonOnClick: PropTypes.func.isRequired,
  buttons: BulletPointMenuButton.propTypes.buttons,
  editButtonOnClick: PropTypes.func.isRequired,
  label: PropTypes.oneOf(['Published', 'Draft', 'Archived', 'Ongoing changes']),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'published', 'revision', 'archived', 'draft'])
};

export default CustomPlaylist;
