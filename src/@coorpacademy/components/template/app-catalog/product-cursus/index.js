import { checker, createValidate } from '../../../util/validation';
import layout from '../layout.css';

import createCursusHeader from '../../../molecule/cursus-header';
import createCursusRightaside from '../../../organism/cursus-rightaside';

const conditions = checker.shape({
  props: checker.shape({
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const CursusHeader = createCursusHeader(treant, options);
  const CursusRightaside = createCursusRightaside(treant, options);

  const ProductCursus = (props, children) => {
    const {cursus} = props;

    return (
      <div className={layout.wrapper}>
        <div className={layout.container}>
          <CursusHeader
            {...props}
          />
        </div>
        <div className={layout.colContainer}>
          <CursusRightaside
            cursus={cursus}
          />
        </div>
      </div>
    );
  };

  ProductCursus.validate = createValidate(conditions);
  return ProductCursus;
};
