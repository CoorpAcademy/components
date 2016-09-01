import find from 'lodash/fp/find';
import createLink from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    cursuses: checker.array
  }).strict,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const listTitle = translate ? translate('Cursuses') : 'Cursuses';

  const Link = createLink(treant, options);

  const CursusList = ({cursuses = []}, children) => {
    const CursusesDiv = cursuses.map(cursus => {
      const {title, href, selected} = cursus;

      const linkProps = selected ? {
        className: style.selected
      } : {};

      return (
        <li className={style.cursus}>
          <Link
            {...linkProps}
            href={href}
          >
            {title}
          </Link>
        </li>
      );
    });

    const selectedCursus = find({
      selected: true
    }, cursuses);

    return (
      <div className={style.cursuses}>
        <h2 className={style.title}>{listTitle}</h2>
        <ul className={style.list}>
          {CursusesDiv}
        </ul>
      </div>
    );
  };

  CursusList.validate = createValidate(conditions);
  return CursusList;
};
