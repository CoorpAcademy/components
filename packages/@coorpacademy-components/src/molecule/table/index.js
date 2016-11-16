import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    rows: checker.arrayOf(checker.shape({
      fields: checker.arrayOf(checker.string.optional),
      editHref: checker.string
    })),
    columns: checker.arrayOf(checker.shape({
      title: checker.string,
      filtered: checker.bool.optional,
      options: checker.arrayOf(checker.shape({
        title: checker.string,
        onChange: checker.func,
        selected: checker.bool
      })).optional
    }))
  }),
  children: checker.none
});

export default (treant, opts = {}) => {
  const {h} = treant;

  const Table = (props, children) => {
    const {
      rows,
      columns
    } = props;

    const header = columns.map(column => {
      const {
        title,
        filtered,
        options = []
      } = column;

      const createOptionsView = _options => {
        const optionsView = _options.map(option => {
          const {
            onChange,
            selected
          } = option;

          return (
            <div className={selected ? style.selected : style.option}>
              <button onClick={onChange}>{option.title}</button>
            </div>
          );
        });

        return (
          <div className={style.options}>
            {optionsView}
          </div>
        );
      };

      return (
        <th>
          <input
            type='checkbox'
            id={title}
            name={title}
            className={style.checkbox}
          />
          <label className={filtered ? style.filtered : style.toggle} htmlFor={title}>
            {title}
          </label>
          {options.length > 0 ? createOptionsView(options) : null}
        </th>
      );
    });

    const body = rows.map(row => {
      const {
        fields
      } = row;

      const tableRows = fields.map(field => {
        return (
          <td>{field}</td>
        );
      });

      return (
        <tr>{tableRows}</tr>
      );
    });

    return (
      <div className={style.wrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              {header}
            </tr>
          </thead>
          <tbody>
            {body}
          </tbody>
        </table>
      </div>
    );
  };

  Table.validate = createValidate(conditions);
  return Table;
};
