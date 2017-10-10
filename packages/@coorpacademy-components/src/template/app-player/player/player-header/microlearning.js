import React from 'react';
import PropTypes from 'prop-types';
import BackIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-left';
import Link from '../../../../atom/link';
import style from './microlearning.css';

const Content = ({href, title}, context) =>
  <Link href={href} className={style.content}>
    <BackIcon className={style.backIcon} color="inherit" />
    <div className={style.contentTitle}>{title}</div>
  </Link>;

const MicrolearningHeader = (props, context) => {
  const {content} = props;
  return <Content {...content} />;
};

MicrolearningHeader.propTypes = {
  content: PropTypes.shape({
    href: Link.propTypes.href,
    title: PropTypes.string.isRequired
  })
};

export default MicrolearningHeader;
