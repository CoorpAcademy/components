import style from './main.css';
import { createDisciplineCards } from '../../src';
import createPie from './pie';
import disciplines from '../assets/disciplines';
import skin from '../assets/skin';

export default (engine) => {
  const {h} = engine;
  const options = {
    skin
  };

  const DisciplineCards = createDisciplineCards(engine, options);
  const Pie = createPie(engine, options);

  return (props) => (
    <div>
      <div className={style.learningTreeDefault}>
        <DisciplineCards disciplines={disciplines}/>
      </div>
      <Pie height="350px" width="50%" data={exampleData()}/>
      <Pie height="350px" width="50%" data={exampleData()}/>
    </div>
  );
};

function rand() {
  return Math.round(Math.random()*100);
}

function exampleData() {
  return  [
    {
      'label': 'One',
      'value' : rand()
    } ,
    {
      'label': 'Two',
      'value' : rand()
    } ,
    {
      'label': 'Three',
      'value' : rand()
    } ,
    {
      'label': 'Four',
      'value' : rand()
    } ,
    {
      'label': 'Five',
      'value' : rand()
    } ,
    {
      'label': 'Six',
      'value' : rand()
    } ,
    {
      'label': 'Seven',
      'value' : rand()
    } ,
    {
      'label': 'Eight',
      'value' : rand()
    }
  ];
}
