import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.495 12.131c-1.531-1.969-4.49-3.437-7.495-4.287V4l3 2V1l-3 2V1h-2v2L9 1v5l3-2v3.367C10.753 7.127 9.551 7 8.5 7A4.5 4.5 0 0 0 4 11.5c0 .656.148 1.276.401 1.839A4 4 0 0 0 2 17c0 2.205 1.794 4 4 4h9v-2H6c-1.103 0-2-.896-2-2 0-1.013.759-1.843 1.736-1.973A4.46 4.46 0 0 0 8.5 16h11.103a2.397 2.397 0 0 0 1.892-3.869zM18 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </Svg>
);

export default SvgComponent;
