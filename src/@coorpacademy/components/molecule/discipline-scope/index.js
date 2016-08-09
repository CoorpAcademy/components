import { checker, createValidate } from '../../util/validation';
import style from './discipline-scope.css';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
      images: checker.array
    })
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const DisciplineScope = (props, children) => {
    const {h} = engine;
    const {product} = props;
    return (
      <div className={style.scope}>
            <ul className={style.title}>
                <li className={style.tabscurrent}>Base</li>
                <li className={style.tabs}>Avancé</li>
                <li className={style.tabs}>Coach</li>
            </ul>
            <div className={style.desc}>
                <div className={style.desctitle}>
                    BASE / <span className={style.desctitlecontent}>Stratégie Digitale</span>
                </div>
                <div className={style.leftscope}>
                    <div className={style.lstitle}>À L'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :</div>
                    <ul className={style.leftscopelist}>
                        <li>Duis mollis, est non commodo luctus</li>
                        <li>Duis mollis, est non commodo luctus</li>
                        <li>Duis mollis, est non commodo luctus</li>
                    </ul>
                </div>
                <div className={style.rightscope}>
                <div className={style.rstitle}>chapitres</div>
                    <ul className={style.rightscopelist}>
                        <li>Duis mollis</li>
                        <li>Duis mollis</li>
                        <li>Duis mollis</li>
                    </ul>
                </div>
            </div>
            <div className={style.asset}>
                <div className={style.assettitle}>assets</div>
                <div className={style.assetdesc}>
                    <div className={style.coursescope}>
                      <ul>
                        <li><span>5</span> DISCIPLINES</li>
                        <li><span>600</span> QUESTIONS</li>
                        <li><span>15</span> NIVEAUX À VALIDER</li>
                        <li><span>75</span> VIDÉOS DE 5 MIN</li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  DisciplineScope.validate = createValidate(conditions);
  return DisciplineScope;
};
