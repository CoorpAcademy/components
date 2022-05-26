import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.537 8.082L15.068 2.72A1.991 1.991 0 0013.531 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9.362c0-.466-.164-.921-.463-1.28zM10 6h2v3h-2V6zM7 6h2v3H7V6zm1.586 13L12 15.586 15.414 19H8.586z"
    />
  </svg>
);

export default SvgComponent;
