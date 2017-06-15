import React from 'react';
import noop from 'lodash/fp/noop';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import AddIcon from '@coorpacademy/nova-icons/solid/remove-and-add/add-1';
import SubtractIcon from '@coorpacademy/nova-icons/solid/remove-and-add/subtract-1';
import Provider from '../../../atom/provider';
import style from './style.css';

const AccordionPart = (props, context) => {
  const {skin} = context;
  const {title, content, onClick = noop, isOpen = false} = props;
  const Icon = isOpen ? SubtractIcon : AddIcon;
  const darkColor = getOr('#546E7A', 'common.dark', skin);

  return (
    <div>
      <div className={style.title} onClick={onClick}>
        <h3>{title}</h3>
        <Icon className={style.icon} color={darkColor} />
      </div>
      <div className={isOpen ? style.container : style.none}>
        {content}
      </div>
    </div>
  );
};

AccordionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AccordionPart.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};

export default AccordionPart;
