import {
  createDisciplineCard
} from '../../src/components';

import skin from '../assets/skin';
import disciplines from '../assets/disciplines';
import sandbox from './sandbox.css';

export default engine => {
  const {h} = engine;
  const options = {
    skin
  };

  const DisciplineCard = createDisciplineCard(engine, options);

  return (props, children) => (
    <div>
      <DisciplineCard
        discipline={disciplines[0]}
        onClick={(...argz) => console.log('click card', ...argz)}
        onModuleClick={(...argz) => console.log('click module', ...argz)}
      />
      <DisciplineCard
        discipline={disciplines[1]}
        onClick={(...argz) => console.log('click card', ...argz)}
        onModuleClick={(...argz) => console.log('click module', ...argz)}
      />
    </div>
  );
};
