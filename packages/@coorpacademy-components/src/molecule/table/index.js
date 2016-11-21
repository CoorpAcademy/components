import {checker, createValidate} from '../../util/validation';
import createLink from '../../atom/link';
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

  const Link = createLink(treant, opts);

  const Table = (props, children) => {
    const {
      rows,
      columns
    } = props;

    const headerView = columns.map(column => {
      const {
        title,
        filtered,
        options = []
      } = column;

      const hasOptions = options.length > 0;

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

        return hasOptions ? (
          <div className={style.options}>
            {optionsView}
          </div>
        ) : null;
      };

      const optionsClassName = hasOptions ? style.toggle : style.noOptions;

      return (
        <th>
          <div className={filtered ? style.filtered : optionsClassName} >
            <input
              type='checkbox'
              id={title}
              name={title}
              className={style.checkbox}
            />
            <label htmlFor={title}>
              {title}
            </label>
            {options.length > 0 ? createOptionsView(options) : null}
          </div>
        </th>
      );
    });

    headerView.unshift((
      <th>
        <div className={style.noOptions}>
        </div>
      </th>
    ));

    const bodyView = rows.map(row => {
      const {
        fields,
        editHref
      } = row;

      const tableRows = fields.map(field => {
        return (
          <td>{field}</td>
        );
      });

      tableRows.unshift((
        <td>
          <Link className={style.editLink} href={editHref}></Link>
        </td>
      ));

      return (
        <tr>{tableRows}</tr>
      );
    });

    return (
      <div className={style.wrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              {headerView}
            </tr>
          </thead>
          <tbody>
            {bodyView}
          </tbody>
        </table>
      </div>
    );
  };

  Table.validate = createValidate(conditions);
  return Table;
};
