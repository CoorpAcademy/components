import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(ariaLabel || alt
      ? {
          role: 'img'
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M.001 0h24v24.002h-24z" />
      <g fill="currentColor">
        <path d="M22 2a.998.998 0 00-.97-.257c-2.641.72-3.226.816-4.784 1.552l4.458 4.459c.733-1.552.83-2.133 1.553-4.783A1.001 1.001 0 0022 2zM12.311 6.032l-7.27 7.271 5.657 5.656 7.271-7.269c.649-.65 1.206-1.375 1.712-2.131L14.442 4.32c-.757.507-1.482 1.063-2.131 1.712zM3.626 16.131c-1.171 1.172-1.414 5.657-1.414 5.657s4.485-.243 5.657-1.415c.546-.545.827-1.25.864-1.964L5.59 15.268a2.974 2.974 0 00-1.964.863zM8.232 9.061H3.626l-1.414 1.414 2.303 2.302zM13.525 21.788l1.415-1.414v-4.586l-3.707 3.707z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
