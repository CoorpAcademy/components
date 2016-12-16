import Inferno from 'inferno';
import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import InputText from '../../atom/input-text';
import InputColor from '../../atom/input-color';
import Select from '../../atom/select';
import style from './style.css';

const buildField = field => {
  switch (field.type) {
    case 'color':
      return (
        <InputColor {...field}/>
      );
    case 'select':
      return null;
      // return (
      //   <Select {...field}/>
      // );
    default:
      return (
        <InputText {...field}/>
      );
  }
};

const buildFields = map(buildField);

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    fields: checker.array
  }),
  children: checker.none
});

const FormGroup = ({children, ...props}) => {
  const {title, fields} = props;
  
  return (
    <fieldset className={style.set}>
      <legend>{title}</legend>
      <div>
        {buildFields(fields)}
      </div>
    </fieldset>
  );
};

FormGroup.validate = createValidate(conditions);
export default FormGroup;
