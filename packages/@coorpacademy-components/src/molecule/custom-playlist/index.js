import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../bullet-point-menu-button';
import style from './style.css';

const CustomPlaylist = props => {
  const {title, label, type, editButtonOnClick, bulleetPointButtonOnClick} = props;
  return (
    <div className={style.wrapper} style={{marginTop: '150px'}}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        <div>
          <Tag label={label} type={type} />
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
          buttons={[
            {
              'data-name': 'CP-archive-button',
              label: 'Archive',
              type: 'default'
            },
            {
              'data-name': 'CP-delete-button',
              label: 'Delete',
              type: 'dangerous'
            }
          ]}
          onClick={bulleetPointButtonOnClick}
        />
      </div>
    </div>
  );
};

CustomPlaylist.propTypes = {
  bulleetPointButtonOnClick: PropTypes.func,
  editButtonOnClick: PropTypes.func,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'published', 'revision', 'archived'])
};

export default CustomPlaylist;
