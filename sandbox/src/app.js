import {
  createDisciplineHeader,
  createDisciplineScope,
  createDisciplineRightaside
} from '../../src/components';

import products from '../assets/products';
import sandbox from './sandbox.css';

export default engine => {
  const {h} = engine;
  const DisciplineHeader = createDisciplineHeader(engine);
  const DisciplineScope = createDisciplineScope(engine);
  const DisciplineRightaside = createDisciplineRightaside(engine);


  return (props, children) => (
    <div>
      <div style='width:873px;display:inline-block;vertical-align:top;'>
        <DisciplineHeader
          product={products[2]}
        />
        <DisciplineScope
          product={products[2]}
          onClick={id => console.log(id)}
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
