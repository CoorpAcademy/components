import {
  createDisciplineHeader,
  createDisciplineScope
} from '../../src/components';

import products from '../assets/products';
import sandbox from './sandbox.css';

export default engine => {
  const {h} = engine;
  const DisciplineHeader = createDisciplineHeader(engine);
  const DisciplineScope = createDisciplineScope(engine);

  return (props, children) => (
    <div>
      <DisciplineHeader
      />
      <DisciplineScope
      />
    </div>
  );
};
