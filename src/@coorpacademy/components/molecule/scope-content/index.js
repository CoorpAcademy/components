import { checker, createValidate } from '../../util/validation';
import style from './scope-content.css';

const conditions = checker.shape({
  props: checker.shape({
    selected: checker.bool
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const ScopeContent = (props, children) => {
    const {h} = treant;
    const {selected} = props;
    const {product = ''} = props;

    const title = 'Leadership au féminin : la pratique';
    const time = '2h20';
    const lstitle = 'À L\'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :';

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
            <li>Duis mollis, est non commodo luctus</li>
            <li>Duis mollis, est non commodo luctus</li>
            <li>Duis mollis, est non commodo luctus</li>
          </ul>
        </div>
        <div className={style.column}>
          <div className={style.coltitle}>chapitres</div>
          <div className={style.dotscontainer}>
            <div className={style.dots}></div>
            <ul className={style.roundedlist}>
              <li>Duis mollis</li>
              <li>Duis mollis</li>
              <li>Duis mollis</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  ScopeContent.validate = createValidate(conditions);
  return ScopeContent;
};
