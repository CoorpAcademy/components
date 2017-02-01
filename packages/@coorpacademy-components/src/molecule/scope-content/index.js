import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import Button from '../../atom/button';
import addClassName from '../../util/add-class-name';
import style from './style.css';

const ScopeContent = (props, context) => {
  const {translate = identity, skin} = context;
  const {content} = props;

  const lstitle = translate('At the end of this level, you will be able to:');
  const _chaptersTitle = translate('chapters');
  const assetsTitle = translate('assets');

  const time = getOr('', 'time', content);
  const title = getOr('', 'title', content);
  const _skills = getOr([], 'skills', content);
  const _chapters = getOr([], 'chapters', content);
  const _assets = getOr([], 'course_scope', content);
  const _videos = getOr([], 'videos', content);

  const skillsTitle = getOr(lstitle, 'skillsTitle', content);
  const chaptersTitle = getOr(_chaptersTitle, 'chaptersTitle', content);

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
      submitValue={buttonLabel}
      style={{
        backgroundColor: getOr('#000', 'common.primary', skin)
      }}
    />
  );

  const videos = _videos.map((video, index) => {
    const handleClick = get('onClick', video);
    const playButton = handleClick && (
      <div className={style.play} />
    );

    return (
      <div key={index}
        className={style.video}
        onClick={handleClick}
      >
        <div className={style.imgWrapper}>
          <img src={video.image} />
          {playButton}
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
            <div>
              <span className={style.time}>{time}</span>
            </div>
          </div>
          {ctaView}
        </div>
        <div {...addClassName(`${style.column}`)({
          className: style.skills
        })}
        >
          <div className={style.coltitle}>
            {skillsTitle}
          </div>
          <ul className={style.dottedlist}>
            {skills}
          </ul>
        </div>
        <div className={style.column}>
          <div className={style.coltitle}>
            {chaptersTitle}
          </div>
          <div className={style.dotscontainer}>
            <ul className={style.roundedlist}>
              {chapters}
            </ul>
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
    skillsTitle: PropTypes.string,
    chaptersTitle: PropTypes.string,
    time: PropTypes.string,
    onClick: PropTypes.func,
    buttonLabel: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    chapters: PropTypes.arrayOf(PropTypes.object),
    course_scope: PropTypes.arrayOf(PropTypes.string),
    videos: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      onClick: PropTypes.func
    }))
  })
};

export default ScopeContent;
