import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import Button from '../../atom/button';
import VideoIframe from '../video-iframe';
import style from './style.css';

const ScopeContent = (props, context) => {
  const {translate = identity, skin} = context;
  const {content} = props;

  const lstitle = translate('At the end of this level, you will be able to:');
  const chaptersTitle = translate('chapters');
  const assetsTitle = translate('assets');

  const time = getOr('', 'time', content);
  const title = getOr('', 'title', content);
  const _skills = getOr([], 'skills', content);
  const _chapters = getOr([], 'chapters', content);
  const _assets = getOr([], 'course_scope', content);
  const _videos = getOr([], 'videos', content);

  const onClick = get('onClick', content);
  const buttonLabel = get('buttonLabel', content);

  const skills = _skills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));

  const chapters = _chapters.map((chapter, index) => (
    <li key={index}>{chapter.name}</li>
  ));

  const assets = _assets.map((asset, index) => (
    <span key={index}>{asset}</span>
  ));

  const ctaView = onClick && (
    <Button
      className={style.cta}
      onClick={onClick}
      submitValue={translate(buttonLabel)}
      style={{
        backgroundColor: getOr('#000', 'common.primary', skin)
      }}
    />
  );

  const videos = _videos.map((video, index) => {
    const type = get('type', video);
    const id = get('id', video);

    return (
      <div key={index}
        className={style.video}
      >
        <div className={style.imgWrapper}>
          <VideoIframe
            type={type}
            id={id}
            width="380px"
            height="250px"
          />
        </div>
        <div className={style.videoTitle}>
          {video.title}
        </div>
      </div>
    );
  });

  const videosView = _videos.length > 0 ? (
    <div className={style.videos}>
      {videos}
    </div>
  ) : null;

  return (
    <div>
      <div className={style.desc}>
        <div className={style.infos}>
          <div className={style.title}>
            {title}
          </div>
          <div className={style.time}>{time}</div>
        </div>
        <div className={style.column}>
          <div className={style.coltitle}>
            {lstitle}
          </div>
          <ul className={style.dottedlist}>
            {skills}
          </ul>
        </div>
        <div className={style.column}>
          <div className={style.coltitle}>{chaptersTitle}</div>
          <div className={style.dotscontainer}>
            <div className={style.dots} />
            <ul className={style.roundedlist}>
              {chapters}
            </ul>
          </div>
        </div>
      </div>

      {ctaView}

      <div className={style.asset}>
        <div className={style.assetTitle}>{assetsTitle}</div>
        <div className={style.assetDesc}>
          <div className={style.courseScope}>
            {assets}
          </div>
        </div>
      </div>
      {videosView}
    </div>
  );
};

ScopeContent.contextTypes = {
  skin: PropTypes.object,
  translate: React.PropTypes.func
};

ScopeContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    time: PropTypes.string,
    onClick: PropTypes.func,
    buttonLabel: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    chapters: PropTypes.arrayOf(PropTypes.object),
    course_scope: PropTypes.arrayOf(PropTypes.string),
    videos: PropTypes.arrayOf(PropTypes.object)
  })
};

export default ScopeContent;
