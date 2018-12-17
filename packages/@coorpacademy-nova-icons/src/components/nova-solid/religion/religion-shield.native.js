import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M20.526 1.768a.998.998 0 0 0-.973-.044l-2.342 1.171a1.005 1.005 0 0 1-.447.105H7.236c-.155 0-.308-.036-.447-.105L4.447 1.724A.998.998 0 0 0 3 2.619v14.792c0 .363.197.699.515.874l8 4.444a.998.998 0 0 0 .971 0l8-4.444a.997.997 0 0 0 .514-.873V2.619c0-.347-.18-.669-.474-.851zM16.5 11H13v6h-2v-6H7.5V9H11V6h2v3h3.5v2z"
    />
  </Svg>
);

export default SvgComponent;
