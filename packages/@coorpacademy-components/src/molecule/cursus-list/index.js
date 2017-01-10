import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import Link from '../../atom/link';
import style from './style.css';

const CursusList = (props, context) => {
  const {translate = identity} = context;
  const {cursuses = []} = props;
  const listTitle = translate('Training Packages');
  const CursusesDiv = cursuses.map((cursus, index) => {
    const {title, href, selected} = cursus;

    const linkProps = selected ? {
      className: style.selected
    } : {};

    return (
      <li
        className={style.cursus}
        key={index}
      >
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

CursusList.contextTypes = {
  translate: React.PropTypes.func
};

CursusList.propTypes = {
  cursuses: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string
    })
  )
};
export default CursusList;
