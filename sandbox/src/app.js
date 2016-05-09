import { createCheckboxes } from '../../src';
import skin from '../assets/skin';
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

  return (props) => (
    <Checkboxes
      choices={choices}
      onToggle={onToggle}
    >
    </Checkboxes>
  );
};
