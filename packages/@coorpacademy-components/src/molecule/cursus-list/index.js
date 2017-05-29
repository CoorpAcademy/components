import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link';
import Provider from '../../atom/provider';
import style from './style.css';

const CursusList = (props, context) => {
  const {translate} = context;
  const {cursuses = []} = props;
  const listTitle = translate('Training Packages');
  const CursusesDiv = cursuses.map((cursus, index) => {
    const {title, href} = cursus;

    return (
      <li className={style.cursus} key={index}>
        <Link href={href}>
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
  translate: Provider.childContextTypes.translate
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
