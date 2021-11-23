import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import style from './style.css';

const ListItem = props => {
  const {title, tags, editButtonOnClick, bulletPointButtonOnClick, buttons} = props;
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        {tags.length === 2 ? (
          <>
            <div className={style.revised}>
              <Tag label={tags[0].label} type={tags[0].type} />
            </div>
            <div>
              <Tag label="Published" type="published" />
            </div>
          </>
        ) : (
          <div>
            <Tag label={tags[1].label} type={tags[1].type} />
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
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.oneOf(['published', 'draft', 'archived', 'revised', 'default'])
    })
  ),
  title: PropTypes.string.isRequired
};

export default ListItem;
