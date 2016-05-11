import { createCheckboxes, createDisciplineCard } from '../../src';
import skin from '../assets/skin';
import disciplines from '../assets/disciplines';
import sandbox from './sandbox.css';

export default (engine) => {
  const {h} = engine;
  const options = {
    skin
  };

  let choices = [{
    label: 'plop',
    checked: false
  },{
    label: 'plup',
    checked: true
  },{
    label: 'ploup',
    checked: true
  }];

  const onToggle = () => {
  };

  const Checkboxes = createCheckboxes(engine, options);
  const DisciplineCard = createDisciplineCard(engine, options);

  return props => (
    <div>
      <Checkboxes
        theme='courses'
        choices={choices}
        onToggle={onToggle}
      />
      <DisciplineCard discipline={disciplines[0]}/>
    </div>
  );

};
