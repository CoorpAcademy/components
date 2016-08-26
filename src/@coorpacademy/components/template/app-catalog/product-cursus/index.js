import { checker, createValidate } from '../../../util/validation';
import layout from '../layout.css';

import createCursusHeader from '../../../molecule/cursus-header';

const conditions = checker.shape({
  props: checker.shape({
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const CursusHeader = createCursusHeader(treant, options);
  // const CursusScope = createCursusScope(treant, options);
  // const CursusRightaside = createCursusRightaside(treant, options);

  const ProductCursus = (props, children) => {
    const {product, changeLevel} = props;

    return (
      <div className={layout.wrapper}>
        <div className={layout.container}>
          <CursusHeader
            {...props}
          />
        </div>
      </div>
    );
  };

  ProductCursus.validate = createValidate(conditions);
  return ProductCursus;
};

/*
        <div className={style.colContainer}>
          <CursusRightaside
            product={product}
          />
        </div>
        <div className={style.container}>
          <CursusScope
            {...props}
            onClick={changeLevel}
          />
        </div>
 */
