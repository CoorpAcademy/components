import createDisciplineHeader from '../../components/molecule/discipline-header';
import createDisciplineScope from '../../components/molecule/discipline-scope';
import createDisciplineRightaside from '../../components/organism/discipline-rightaside';

import products from '../assets/products';
import style from './sandbox.css';

export default treant => {
  const {h} = treant;
  const DisciplineHeader = createDisciplineHeader(treant);
  const DisciplineScope = createDisciplineScope(treant);
  const DisciplineRightaside = createDisciplineRightaside(treant);

  return (props, children) => (
    <div>
      <div className={style.container}>
        <DisciplineHeader
          product={products[2]}
        />
        <DisciplineScope
          product={products[2]}
          onClick={id => console.log(id)} // eslint-disable-line no-console
          selected={1}
        >
        </DisciplineScope>
      </div>

      <DisciplineRightaside
        product={products[2]}
      />
    </div>
  );
};
