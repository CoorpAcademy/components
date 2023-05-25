import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaCompositionNavigationArrowLeft as BackIcon} from '@coorpacademy/nova-icons';
import Link from '../../../../../atom/link';
import style from './microlearning.css';

const Content = ({onClick, title, mode}, context) => {
  const content = (
    <div
      data-name="contentTitle"
      className={classnames(style.contentTitle, style.innerHTML)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: title}}
    />
  );
  if (mode === 'scorm')
    return (
      <div className={style.contentScorm}>
        <div className={style.backIcon} />
        {content}
      </div>
    );
  return (
    <Link onClick={onClick} className={style.content}>
      <BackIcon className={style.backIcon} />
      {content}
    </Link>
  );
};

Content.propTypes = {
  onClick: Link.propTypes.onClick,
  title: PropTypes.node,
  mode: PropTypes.string
};

const MicrolearningHeader = (props, context) => {
  const {content, mode} = props;
  return <Content {...content} mode={mode} />;
};

MicrolearningHeader.propTypes = {
  content: PropTypes.shape({
    onClick: Link.propTypes.onClick,
    title: PropTypes.string.isRequired
  }),
  mode: PropTypes.string
};

export default MicrolearningHeader;
