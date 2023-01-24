import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import style from './style.css';

const ListItem = props => {
  const {bulletPointMenuButton, buttonLink, tags, title, order} = props;
  const tagsView = map.convert({cap: false})((tag, index) => {
    return (
      <div key={index} className={style.tag}>
        <Tag {...tag} />
      </div>
    );
  })(tags);
  return (
    <div className={style.wrapper}>
      <div className={style.orderWrapper}>
        <div className={style.order}>{order + 1}</div>
        <div className={style.title} title={title}>
          {title}
        </div>
      </div>
      <div className={style.settings}>
        {tagsView}
        <div className={style.edit}>
          <ButtonLink {...buttonLink} />
        </div>
        <BulletPointMenuButton {...bulletPointMenuButton} />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  bulletPointMenuButton: PropTypes.shape({
    buttonAriaLabel: PropTypes.string,
    menuAriaLabel: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        'data-name': PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    onClick: PropTypes.func
  }),
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
  title: PropTypes.string.isRequired,
  order: PropTypes.number
};

export default ListItem;
