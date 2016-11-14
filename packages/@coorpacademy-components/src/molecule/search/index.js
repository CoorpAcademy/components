import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    value: checker.string.optional,
    placeholder: checker.string,
    onChange: checker.func
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const Search = (props, children) => {
    const {
      value,
      placeholder,
      onChange
    } = props;

    return (
      <div className={style.wrapper}>
        <input
          className={style.search}
          type='text'
          name='search'
          placeholder={placeholder}
          value={value}
          onInput={e => onChange(e.target.value)}
        />
      </div>
    );
  };

  Search.validate = createValidate(conditions);
  return Search;
};
