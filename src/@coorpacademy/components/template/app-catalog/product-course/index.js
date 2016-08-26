import { checker, createValidate } from '../../../util/validation';
import layout from '../layout.css';
import createDisciplineHeader from '../../../molecule/discipline-header';
import createDisciplineScope from '../../../molecule/discipline-scope';
import createDisciplineRightaside from '../../../organism/discipline-rightaside';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    product: checker.object,
    onClick: checker.func,
    selected: checker.number,
    levels: checker.arrayOf(checker.object)
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const DisciplineHeader = createDisciplineHeader(treant, options);
  const DisciplineScope = createDisciplineScope(treant, options);
  const DisciplineRightaside = createDisciplineRightaside(treant, options);

  const ProductCourse = (props, children) => {
    const {product, changeLevel} = props;

    return (
      <div className={layout.wrapper}>
        <div className={layout.container}>
          <DisciplineHeader
            {...props}
          />
        </div>
        <div className={layout.colContainer}>
          <DisciplineRightaside
            product={product}
          />
        </div>
        <div className={layout.container}>
          <DisciplineScope
            {...props}
            onClick={changeLevel}
          />
        </div>
      </div>
    );
  };

  ProductCourse.validate = createValidate(conditions);
  return ProductCourse;
};

