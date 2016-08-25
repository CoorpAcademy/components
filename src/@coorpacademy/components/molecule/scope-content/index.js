import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../util/validation';
import style from './scope-content.css';

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
  const ScopeContent = (props, children) => {
    const {h} = treant;
    const {content} = props;
    const {product = ''} = props;

    const time = getOr('', 'time', content);
    const title = getOr('', 'title', content);
    const _skills = getOr([], 'skills', content);
    const _chapters = getOr([], 'chapters', content);
    const _assets = getOr([], 'course_scope', content);

    const lstitle = 'À L\'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :';

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
            <div className={style.coltitle}>chapitres</div>
            <div className={style.dotscontainer}>
              <div className={style.dots}></div>
              <ul className={style.roundedlist}>
                {chapters}
              </ul>
            </div>
          </div>
        </div>
        <div className={style.asset}>
          <div className={style.assetTitle}>assets</div>
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
