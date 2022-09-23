import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import classnames from 'classnames';
import {NovaCompositionNavigationArrowLeft as BackIcon} from '@coorpacademy/nova-icons';
import Link from '../../../../../atom/link';
import Provider from '../../../../../atom/provider';
import style from './learner.css';

const LearnerHeaderWarpper = props => {
  const {children, mode, onClick} = props;
  if (mode === 'scorm')
    return (
      <div className={style.contentWrapperScorm}>
        <div className={style.backIcon} />
        {children}
      </div>
    );
  return (
    <Link
      onClick={onClick}
      className={mode === 'scorm' ? style.contentWrapperScorm : style.contentWrapper}
    >
      <BackIcon className={style.backIcon} color="inherit" />
      {children}
    </Link>
  );
};

LearnerHeaderWarpper.propTypes = {
  onClick: Link.propTypes.onClick,
  mode: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

const Content = ({onClick, title, details, mode}, context) => {
  const {skin} = context;
  const primarySkinColor = get('common.primary', skin);

  return (
    <LearnerHeaderWarpper mode={mode} onClick={onClick}>
      <div className={style.content}>
        <div
          className={style.contentDetails}
          style={{
            color: primarySkinColor
          }}
        >
          {details}
        </div>

        <span
          data-name="contentTitle"
          className={classnames(style.contentTitle, style.innerHTML)}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
      </div>
    </LearnerHeaderWarpper>
  );
};

Content.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Content.propTypes = {
  onClick: Link.propTypes.onClick,
  title: PropTypes.string.isRequired,
  details: PropTypes.string,
  mode: PropTypes.string
};

const Subcontent = ({title, details}, context) => (
  <div className={style.subcontent}>
    <div className={style.subcontentDetails}>{details}</div>
    <div
      className={classnames(style.subcontentTitle, style.innerHTML)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: title}}
    />
  </div>
);

Subcontent.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string
};

const LearnerHeader = (props, context) => {
  const {content, subcontent, mode} = props;

  return (
    <div className={style.wrapper}>
      <Content {...content} mode={mode} />
      <Subcontent {...subcontent} />
    </div>
  );
};

LearnerHeader.propTypes = {
  content: PropTypes.shape(Content.propTypes).isRequired,
  subcontent: PropTypes.shape(Subcontent.propTypes).isRequired,
  mode: PropTypes.string
};

export default LearnerHeader;
