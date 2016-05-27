import {
  createLabelModName,
  createCheckboxes,
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

  const choices = [{
    label: 'plop',
    checked: false
  }, {
    label: 'plup',
    checked: false
  }, {
    label: 'ploup',
    checked: true
  }];

  const LabelModName = createLabelModName(engine, options);
  const Checkboxes = createCheckboxes(engine, options);
  const DisciplineCard = createDisciplineCard(engine, options);

  return (props, children) => (
    <div>
      <LabelModName>pop</LabelModName>
      <Checkboxes
        title='Pick me'
        theme='courses'
        mode='closable'
        status='closed'
        choices={choices}
        onToggle={(...argz) => console.log(...argz)}
      />
      <DisciplineCard
        discipline={disciplines[0]}
        onClick={(...argz) => console.log(...argz)}
        onModuleClick={(...argz) => console.log(...argz)}
      />
    </div>
  );
};
