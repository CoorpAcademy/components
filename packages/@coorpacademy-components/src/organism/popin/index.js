import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import Cta from '../../atom/cta';
import Link from '../../atom/link';
import style from './style.css';

const Popin = (props, context) => {
  const {
    popinCTA,
    header,
    content,
    href
  } = props;

  return (
    <div className={style.default}>
      <div className={style.popin}>
        <div className={style.header}>
          <Link href={href}>{header}</Link>
        </div>
        <div className={style.content}>
          {content}
        </div>
        <div className={style.cta}>
          <Cta {...popinCTA} />
        </div>
      </div>
    </div>
  );
};

Popin.propTypes = {
  popinCTA: PropTypes.object,
  href: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string
};

export default Popin;
