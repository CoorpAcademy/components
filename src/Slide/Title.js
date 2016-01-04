import h from '../h';

import style from './style.css';

export default (props, children) => (
  <h1
    className={style.Title}
  >
    {children}
  </h1>
);
