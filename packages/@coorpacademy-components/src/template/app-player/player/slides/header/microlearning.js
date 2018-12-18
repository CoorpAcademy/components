import React from 'react';
import PropTypes from 'prop-types';
import BackIcon from '@coorpacademy/nova-icons/lib/nova-composition/navigation/arrow-left.web';
import Link from '../../../../../atom/link';
import style from './microlearning.css';

const Content = ({onClick, title}, context) => (
  <Link onClick={onClick} className={style.content}>
    <BackIcon className={style.backIcon} color="inherit" />
    <div data-name="contentTitle" className={style.contentTitle}>
      {title}
    </div>
  </Link>
);

const MicrolearningHeader = (props, context) => {
  const {content} = props;
  return <Content {...content} />;
};

MicrolearningHeader.propTypes = {
  content: PropTypes.shape({
    onClick: Link.propTypes.onClick,
    title: PropTypes.string.isRequired
  })
};

export default MicrolearningHeader;
