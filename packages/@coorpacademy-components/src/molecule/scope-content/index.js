import React from 'react';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    content: checker.shape({
      title: checker.string.optional,
      time: checker.string.optional,
      skills: checker.arrayOf(checker.string).optional,
      chapters: checker.arrayOf(checker.object).optional,
      course_scope: checker.arrayOf(checker.string).optional
    }).optional
  }),
  children: checker.none
});

const ScopeContent = (props, context) => {
  const {translate = identity} = context;
  const {content} = props;

  const lstitle = translate('At the end of this level, you will be able to:');
  const chaptersTitle = translate('chapters');
  const assetsTitle = translate('assets');

  const time = getOr('', 'time', content);
  const title = getOr('', 'title', content);
  const _skills = getOr([], 'skills', content);
  const _chapters = getOr([], 'chapters', content);
  const _assets = getOr([], 'course_scope', content);

  const skills = _skills.map(skill => (
    <li>{skill}</li>
  ));

  const chapters = _chapters.map(chapter => (
    <li>{chapter.name}</li>
  ));

  const assets = _assets.map(asset => (
    <span>{asset}</span>
  ));

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
            <div className={style.dots}></div>
            <ul className={style.roundedlist}>
              {chapters}
            </ul>
          </div>
        </div>
      </div>
      <div className={style.asset}>
        <div className={style.assetTitle}>{assetsTitle}</div>
        <div className={style.assetDesc}>
          <div className={style.courseScope}>
            {assets}
          </div>
        </div>
      </div>
    </div>
  );
};

ScopeContent.contextTypes = {
  translate: React.PropTypes.function
};

ScopeContent.validate = createValidate(conditions);
export default ScopeContent;
