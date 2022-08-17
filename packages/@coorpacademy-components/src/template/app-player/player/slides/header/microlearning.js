import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaCompositionNavigationArrowLeft as BackIcon} from '@coorpacademy/nova-icons';
import Link from '../../../../../atom/link';
import style from './microlearning.css';

const Content = ({onClick, title}, context) => (
  <Link onClick={onClick} className={style.content}>
    <BackIcon className={style.backIcon} color="inherit" />
    <div
      data-name="contentTitle"
      className={classnames(style.contentTitle, style.innerHTML)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: title}}
    />
  </Link>
);

Content.propTypes = {
  onClick: Link.propTypes.onClick,
  title: PropTypes.node
};

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
