import { checker, createValidate } from '../../../util/validation';
import style from './scope-content.css';

export default (engine, options = {}) => {
  const ScopeContent = (props, children) => {
    const {h} = engine;
    const {selected} = props;

        if (selected === 0) {
            return (
                <div className={style.desc}>
                    <div className={style.desctitle}>
                        BASE / 
                        <span className={style.desctitlecontent}>title 0</span>
                    </div>
                    <div className={style.time}>2h20</div>
                    <div className={style.leftscope}>
                        <div className={style.lstitle}>
                            À L'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :
                        </div>
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
            );
        };
        if (selected === 1) {
            return (
            <div className={style.desc}>
                <div className={style.desctitle}>AVANCÉ / 
                  <span className={style.desctitlecontent}>title 1</span>
                </div>
                <div className={style.time}>2h20</div>
                <div className={style.leftscope}>
                    <div className={style.lstitle}>
                        À L'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :
                    </div>
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
            );
        };
        if (selected === 2) {
            return (
            <div className={style.desc}>
                <div className={style.desctitle}>COACH / 
                  <span className={style.desctitlecontent}>title 2</span>
                </div>
                <div className={style.time}>2h20</div>
                <div className={style.leftscope}>
                    <div className={style.lstitle}>
                        À L'ISSUE DE CE NIVEAU, VOUS SEREZ CAPABLE DE :
                    </div>
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
    
            );
        };
  };

  return ScopeContent;
};
