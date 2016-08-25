import { checker, createValidate } from '../../util/validation';
import style from './scope-content.css';

const conditions = checker.shape({
  props: checker.shape({
    content: checker.shape({
      level: checker.string,
      achievements: checker.array,
      chapters: checker.array,
      course_scope: checker.array
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const ScopeContent = (props, children) => {
    const {h} = treant;
    const {content} = props;
    const {product = ''} = props;

    const time = content.time;
    const title = content.category[0].title;

    const lstitle = 'À L\'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :';

    const skills = content.skills.map(skill => (
      <li>{skill}</li>
    ));

    const chapters = content.chapters.map(chapter => (
      <li>{chapter.name}</li>
    ));

    const assets = content.course_scope.map(asset => (
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
