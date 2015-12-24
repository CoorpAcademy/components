import h from 'virtual-dom/h';

import style from './style.css';

export default (props, children) =>
  h(`h1.${style.Title}`, {}, children)
;
