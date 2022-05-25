import React from 'react';
import PropTypes from 'prop-types';
import {get, getOr} from 'lodash/fp';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import Discussion from '../../organism/discussion';
import ResourceBrowser from '../../organism/resource-browser';
import style from './style.css';

const ScopeContent = (props, context) => {
  const {translate, skin} = context;
  const {content} = props;

  const lstitle = translate('At the end of this level, you will be able to_');
  const _chaptersTitle = translate('chapters');

  const time = getOr('', 'time', content);
  const title = getOr('', 'title', content);
  const _skills = getOr([], 'skills', content);
  const _chapters = getOr([], 'chapters', content);
  const _resources = getOr([], 'resources', content);

  const skillsTitle = getOr(lstitle, 'skillsTitle', content);
  const chaptersTitle = getOr(_chaptersTitle, 'chaptersTitle', content);

  const onClick = get('onClick', content);
  const buttonLabel = get('buttonLabel', content);
  const discussion = get('discussion', content);
  const skills = _skills.map((skill, index) => (
    <li
      key={index}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: skill}}
    />
  ));

  const chapters = _chapters.map((chapter, index) => (
    <li
      key={index}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: chapter.name}}
    />
  ));

  const ctaView = onClick ? (
    <Button
      data-name="cta"
      type="link"
      className={style.cta}
      onClick={onClick}
      submitValue={buttonLabel}
      style={{
        backgroundColor: get('common.primary', skin)
      }}
    />
  ) : null;

  return content && title ? (
    <div data-name="scopeContent">
      <div data-name="description" className={style.desc}>
        <div className={style.infos}>
          <div className={style.title}>
            <div
              className={style.innerHTML}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: title}}
            />
            <div>
              <span data-name="duration" className={style.time}>
                {time}
              </span>
            </div>
          </div>
          {ctaView}
        </div>
        <div className={style.skills}>
          <div className={style.coltitle}>{skillsTitle}</div>
          <ul className={style.dottedlist}>{skills}</ul>
        </div>
        <div className={style.column}>
          <div className={style.coltitle}>{chaptersTitle}</div>
          <div>
            <ul className={style.roundedlist}>{chapters}</ul>
          </div>
        </div>
      </div>

      {_resources ? (
        <div data-name="description" className={style.bordered}>
          <ResourceBrowser resources={_resources} />
        </div>
      ) : null}
      {discussion ? <Discussion {...discussion} className={style.discussion} /> : null}
    </div>
  ) : (
    <div data-name="discussion">
      {discussion ? <Discussion {...discussion} className={style.discussion} /> : null}
    </div>
  );
};

ScopeContent.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
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
    resources: ResourceBrowser.propTypes.resources,
    discussion: PropTypes.shape(Discussion.propTypes)
  })
};

export default ScopeContent;
