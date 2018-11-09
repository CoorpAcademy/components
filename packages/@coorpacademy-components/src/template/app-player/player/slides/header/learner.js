import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import BackIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-left';
import Link from '../../../../../atom/link';
import Provider from '../../../../../atom/provider';
import style from './learner.css';

const Content = ({onClick, title, details}, context) => {
  const {skin} = context;
  const primarySkinColor = get('common.primary', skin);

  return (
    <Link onClick={onClick} className={style.contentWrapper}>
      <BackIcon className={style.backIcon} color="inherit" />
      <div className={style.content}>
        <div
          className={style.contentDetails}
          style={{
            color: primarySkinColor
          }}
        >
          {details}
        </div>

        <span data-name="contentTitle" className={style.contentTitle}>
          {title}
        </span>
      </div>
    </Link>
  );
};

Content.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const Subcontent = ({title, details}, context) => (
  <div className={style.subcontent}>
    <div className={style.subcontentDetails}>{details}</div>
    <div className={style.subcontentTitle}>{title}</div>
  </div>
);

const LearnerHeader = (props, context) => {
  const {content, subcontent} = props;

  return (
    <div className={style.wrapper}>
      <Content {...content} />
      <Subcontent {...subcontent} />
    </div>
  );
};

LearnerHeader.propTypes = {
  content: PropTypes.shape({
    onClick: Link.propTypes.onClick,
    title: PropTypes.string.isRequired,
    details: PropTypes.string
  }),
  subcontent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    details: PropTypes.string
  })
};

export default LearnerHeader;
