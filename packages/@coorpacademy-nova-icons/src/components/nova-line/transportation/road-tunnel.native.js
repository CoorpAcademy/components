import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <Path
      d="M12 2C5.935 2 1 6.935 1 13v9h22v-9c0-6.065-4.935-11-11-11zM3 13c0-4.963 4.038-9 9-9s9 4.037 9 9v4.827l-5-4.287V12c0-2.205-1.794-4-4-4s-4 1.795-4 4v1.54l-5 4.287V13zm11-1v1h-4v-1c0-1.104.897-2 2-2s2 .896 2 2zm-1 8v-2h-2v2H3.537l5.833-5H11v2h2v-2h1.63l5.833 5H13z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
