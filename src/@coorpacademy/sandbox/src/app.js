import createDisciplineHeader from '../../components/molecule/discipline-header';
import createDisciplineScope from '../../components/molecule/discipline-scope';

import products from '../assets/products';
import sandbox from './sandbox.css';

export default treant => {
  const {h} = treant;
  const DisciplineHeader = createDisciplineHeader(treant);
  const DisciplineScope = createDisciplineScope(treant);

  return (props, children) => (
    <div>
      <DisciplineHeader
      />
      <DisciplineScope
      />
    </div>
  );
};
