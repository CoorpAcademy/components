import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M16.831 17.443a.995.995 0 0 0-.996-.432l-5.157.859-.729-2.189A1.002 1.002 0 0 0 9 14.997H5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3c.49 0 .879-.358.965-.825l4.871.812a.995.995 0 0 0 .406-.016l8-2c.316-.08.573-.307.69-.609a1.003 1.003 0 0 0-.101-.916l-2-3zM1.999 21.998v-6h1v6h-1zm7.959-.02l-4.959-.828v-4.153h3.279l.334 1h-.613a1 1 0 1 0 0 2c.272 0 1.901.034 2.17-.014l5.356-.893.854 1.281-6.421 1.607zM22.999-.002h-3c-.49 0-.879.361-.965.826L14.163.012a.993.993 0 0 0-.406.016l-8 2a1.003 1.003 0 0 0-.59 1.525l2 3a.993.993 0 0 0 .996.431l5.157-.859.729 2.189a1 1 0 0 0 .949.683h4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8a.997.997 0 0 0-.999-.999zm-7.279 7l-.334-1h.613a1 1 0 1 0 0-2c-.169 0-2.004-.014-2.17.015l-5.356.892-.855-1.281 6.422-1.605 4.959.827v4.152H15.72zm6.279 1h-1v-6h1v6zM14.999 10.498a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0-3 0c0 1.5 3 4.5 3 4.5s3-3 3-4.5z" />
    </g>
  </svg>
);

export default SvgComponent;
