import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M21.743 20.33l-9-10c-.379-.421-1.107-.421-1.486 0l-9 10a1.001 1.001 0 0 0 .744 1.669h18c.395 0 .753-.232.914-.592a1.006 1.006 0 0 0-.172-1.077zm-16.498-.331L12 12.494l6.755 7.505H5.245zM9 2.999h3v2H9zM10.363 8.95L8.95 10.362l-2.121-2.12 1.414-1.415zM3 8.999h2v3H3zM7 1.999c0-.551-.448-1-1-1H2c-.552 0-1 .449-1 1v4a1 1 0 0 0 1 1c2.756 0 5-2.243 5-5zM3 4.828v-1.83h1.829A3.017 3.017 0 0 1 3 4.828z" />
    </g>
  </svg>
);

export default SvgComponent;
