import { checker, createValidate } from '../../util/validation';
import style from './scope-content.css';

const conditions = checker.shape({
  props: checker.shape({
    content: checker.shape({
      level: checker.string,
      achievements: checker.array,
      chapters: checker.array
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const ScopeContent = (props, children) => {
    const {h} = treant;
    const {title, content} = props;
    const {product = ''} = props;

    const time = '2h20';
    const lstitle = 'À L\'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :';

    const achievements = content.achievements.map(achievement => (
      <li>{achievement}</li>
    ));

    const chapters = content.chapters.map(chapter => (
      <li>{chapter}</li>
    ));

    return (
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
            {achievements}
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
    );
  };

  ScopeContent.validate = createValidate(conditions);
  return ScopeContent;
};
