import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M15.745.333A.997.997 0 0 0 15 0H1a.997.997 0 0 0-.994 1.11l2 18A1 1 0 0 0 3 20h8l3.257-3.257L15.994 1.11a1 1 0 0 0-.249-.777zM13.439 6H2.562l-.445-4h11.766l-.444 4zM24 15.414L22.586 14 21 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.413L17.414 22H21v-2h-1.586l1-1H24v-2h-1.586z"
    />
  </svg>
);

export default SvgComponent;
