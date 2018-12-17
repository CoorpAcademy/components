import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M20.472 2.119a1 1 0 0 0-1.026.049l-5.392 3.595-4.429-3.544a1.002 1.002 0 0 0-1.18-.051l-6 4A1 1 0 0 0 2 7v14a1 1 0 0 0 1.554.832l5.392-3.594 4.429 3.543a.996.996 0 0 0 1.18.05l6-4A.998.998 0 0 0 21 17V3a.998.998 0 0 0-.528-.881zM7 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.53-.53l-1.061 1.061L15 13.061l-1.47 1.47-1.06-1.061L13.94 12l-1.47-1.469 1.06-1.061L15 10.94l1.47-1.47 1.061 1.061L16.06 12l1.47 1.47z"
    />
  </Svg>
);

export default SvgComponent;
