import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <Path
      d="M19 3h-8V2H9v1H7v2h2v1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-5V5h8v13h-8v-1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5v1H7v2h2v1h2v-1h8v2h2V5c0-1.102-.896-2-2-2zm-4 6H5V8h10v1zM5 14h10v1H5v-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
