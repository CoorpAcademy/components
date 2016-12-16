import Inferno from 'inferno';
import identity from 'lodash/fp/identity';
import Link from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    cursuses: checker.arrayOf(
      checker.shape({
        href: checker.string.optional,
        title: checker.string.optional
      })
    ).optional
  }),
  children: checker.none
});

const CursusList = ({children, ...props}, {translate}) => {
  const {cursuses = []} = props;
  const listTitle = translate('Training Packages');
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
export default CursusList;
