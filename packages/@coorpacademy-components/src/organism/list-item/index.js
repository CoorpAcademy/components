import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import style from './style.css';

const ListItem = props => {
  const {title, tags, buttonLink, bulletPointMenuButton} = props;
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
              <Tag label={tags[1].label} type={tags[1].type} />
            </div>
          </>
        ) : (
          <div>
            <Tag label={tags[0].label} type={tags[0].type} />
          </div>
        )}

        <div className={style.edit}>
          <ButtonLink {...buttonLink} />
        </div>
        <BulletPointMenuButton {...bulletPointMenuButton} />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  bulletPointMenuButton: BulletPointMenuButton.propTypes,

  buttonLink: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    dataName: PropTypes.string,
    icon: PropTypes.shape({
      position: PropTypes.string,
      type: PropTypes.string
    }),
    onClick: PropTypes.func
  }),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.oneOf(['published', 'draft', 'archived', 'revised', 'default'])
    })
  ),
  title: PropTypes.string.isRequired
};

export default ListItem;
