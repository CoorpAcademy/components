import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M15.889 19.374A7.99 7.99 0 0 1 11 12a7.988 7.988 0 0 1 4.889-7.372.998.998 0 1 0 .001-1.842A9.945 9.945 0 0 0 12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10a9.953 9.953 0 0 0 3.889-.784.998.998 0 0 0 0-1.842zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c.312 0 .62.018.925.053A9.98 9.98 0 0 0 9 12a9.985 9.985 0 0 0 3.924 7.948A8.334 8.334 0 0 1 12 20z" />
      <Path d="M22 10h-3l-1-3-1 3h-3l2 2-1 3 3-2 3 2-1-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
