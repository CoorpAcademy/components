import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <Path
      d="M16.98 16.804l-1.955-9.778.945-3.783A1 1 0 0 0 15 2H9a1 1 0 0 0-.971 1.243l.946 3.783-1.955 9.778a.998.998 0 0 0 .273.903l4 4a.997.997 0 0 0 1.414 0l4-4a.996.996 0 0 0 .273-.903zM13.719 4l-.5 2h-2.438l-.5-2h3.438zM12 19.586l-2.914-2.914L10.82 8h2.359l1.734 8.672L12 19.586z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
