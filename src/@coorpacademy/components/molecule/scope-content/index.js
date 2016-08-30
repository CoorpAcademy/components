import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    content: checker.shape({
      title: checker.string,
      time: checker.string,
      skills: checker.arrayOf(checker.string),
      chapters: checker.arrayOf(checker.object),
      course_scope: checker.arrayOf(checker.string)
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const lstitle = t('At the end of this level, you will be able to:');
  const chaptersTitle = t('chapters');
  const assetsTitle = t('assets');

  const ScopeContent = (props, children) => {
    const {content} = props;
    const {product = ''} = props;

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

  ScopeContent.validate = createValidate(conditions);
  return ScopeContent;
};
