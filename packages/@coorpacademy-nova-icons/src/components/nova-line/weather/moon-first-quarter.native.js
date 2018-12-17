import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M11 2h-1v20h1c5.514 0 10-4.485 10-10 0-5.514-4.486-10-10-10zm1 17.938V4.062c3.941.496 7 3.866 7 7.938 0 4.073-3.059 7.444-7 7.938z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
