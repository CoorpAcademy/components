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
      filtered: checker.bool.optional
    }))
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Table = (props, children) => {
    const {
      rows,
      columns
    } = props;

    const header = columns.map(column => {
      const {
        title
      } = column;

      return (
        <th>{title}</th>
      );
    });

    const body = rows.map(row => {
      const {
        fields,
        href
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
