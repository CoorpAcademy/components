import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      d="M20 9.5C20 5.365 16.411 2 12 2S4 5.365 4 9.5c0 2.578 1.396 4.856 3.515 6.207L9.662 20H9l1 3h4l1-3h-.661l2.146-4.293C18.604 14.356 20 12.078 20 9.5zm-2 0c0 1.919-1.079 3.61-2.709 4.594.298-1.371.459-2.94.459-4.594 0-1.654-.161-3.223-.458-4.593C16.921 5.891 18 7.582 18 9.5zm-4.44-5.305c.441 1.458.69 3.34.69 5.305s-.249 3.846-.69 5.305c-.498.123-1.02.195-1.56.195s-1.062-.072-1.56-.195c-.44-1.458-.69-3.34-.69-5.305 0-1.971.25-3.848.691-5.305A6.54 6.54 0 0 1 12 4c.541 0 1.062.073 1.56.195zM6 9.5c0-1.92 1.081-3.611 2.711-4.596C8.414 6.283 8.25 7.867 8.25 9.5c0 1.654.161 3.223.459 4.594C7.079 13.11 6 11.419 6 9.5zM12.662 20h-1.323l-1.663-3.325a8.461 8.461 0 0 0 4.648 0L12.662 20z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
