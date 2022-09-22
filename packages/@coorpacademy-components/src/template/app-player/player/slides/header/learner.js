import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import classnames from 'classnames';
import {NovaCompositionNavigationArrowLeft as BackIcon} from '@coorpacademy/nova-icons';
import Link from '../../../../../atom/link';
import Provider from '../../../../../atom/provider';
import style from './learner.css';

const Content = ({onClick, title, details, mode}, context) => {
  const {skin} = context;
  console.log("🚀 ~ file: learner.js ~ line 12 ~ Content ~ mode", mode)
  const primarySkinColor = get('common.primary', skin);

  return (
    <Link 
    {...(mode !== 'scorm' && {onClick: onClick})}
    className={mode === 'scorm' ?  style.contentWrapperScorm : style.contentWrapper }
    >
     {mode === 'scorm' ? <div className={style.backIcon} ></div> : <BackIcon className={style.backIcon} color="inherit"/>}
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
    </Link>
  );
};

Content.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Content.propTypes = {
  onClick: Link.propTypes.onClick,
  title: PropTypes.string.isRequired,
  details: PropTypes.string
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
      <Content {...content} mode={mode}/>
      <Subcontent {...subcontent} />
    </div>
  );
};

LearnerHeader.propTypes = {
  content: PropTypes.shape(Content.propTypes).isRequired,
  subcontent: PropTypes.shape(Subcontent.propTypes).isRequired
};

export default LearnerHeader;
