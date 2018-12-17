import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M10.998 24h-10a.998.998 0 0 1-.732-1.68l2.306-2.484C1.539 18.392.998 16.735.998 15c0-4.963 4.486-9 10-9v2c-4.411 0-8 3.141-8 7 0 1.537.568 3 1.642 4.232a1 1 0 0 1-.021 1.338L3.291 22h7.707c4.411 0 8-3.14 8-7 0-1.204-.364-2.398-1.052-3.454l1.676-1.092c.9 1.382 1.376 2.953 1.376 4.546 0 4.963-4.486 9-10 9z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M13.998 6h6v2h-6z" />
  </Svg>
);

export default SvgComponent;
