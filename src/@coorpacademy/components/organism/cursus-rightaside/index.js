import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './cursus-rightaside.css';
import createCatalogCTA from '../../molecule/catalog-cta';

const conditions = checker.shape({
  props: checker.shape({
    cursus: checker.shape({
    })
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const {h} = treant;
  const CatalogCTA = createCatalogCTA(treant, options);

  const CursusRightaside = (props, children) => {
    const {cursus} = props;

    return (
      <div className={style.col}>
        <CatalogCTA
          content={cursus}
        >
        </CatalogCTA>
      </div>
    );
  };

  CursusRightaside.validate = createValidate(conditions);
  return CursusRightaside;
};
