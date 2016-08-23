import { checker, createValidate } from '../../util/validation';
import style from './product-course.css';
import createDisciplineHeader from '../../molecule/discipline-header';
import createDisciplineScope from '../../molecule/discipline-scope';
import createDisciplineRightaside from '../../organism/discipline-rightaside';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const DisciplineHeader = createDisciplineHeader(treant, options);
  const DisciplineScope = createDisciplineScope(treant, options);
  const DisciplineRightaside = createDisciplineRightaside(treant, options);

  const ProductCourse = (props, children) => {
    const products = props.products;

    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <DisciplineHeader
            {...props}
          />
        </div>
        <div className={style.colContainer}>
          <DisciplineRightaside
            product={products[2]}
          />
        </div>
        <div className={style.container}>
          <DisciplineScope
            {...props}
            onClick={id => console.log(id)} // eslint-disable-line no-console
            selected={1}
          />
        </div>
      </div>
    );
  };

  ProductCourse.validate = createValidate(conditions);
  return ProductCourse;
};
