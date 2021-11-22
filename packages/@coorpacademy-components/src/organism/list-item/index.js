import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import style from './style.css';

const ListItem = props => {
  const {title, label, type, editButtonOnClick, bulletPointButtonOnClick, buttons} = props;
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        {type === 'revised' ? (
          <>
            <div className={style.revised}>
              <Tag label="Ongoing changes" type="revised" />
            </div>
            <div>
              <Tag label="Published" type="published" />
            </div>
          </>
        ) : (
          <div>
            <Tag label={label} type={type} />
          </div>
        )}

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

ListItem.propTypes = {
  bulletPointButtonOnClick: PropTypes.func.isRequired,
  buttons: BulletPointMenuButton.propTypes.buttons,
  editButtonOnClick: PropTypes.func.isRequired,
  label: PropTypes.oneOf(['Published', 'Draft', 'Archived', 'Ongoing changes']),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'published', 'revised', 'archived', 'draft'])
};

export default ListItem;
