import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M18 2H6c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h12c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zM9.5 19a3 3 0 1 1 0-6 3 3 0 1 1 0 6zm6.5 0a1 1 0 1 1-.002-1.998A1 1 0 0 1 16 19zm0-4a1 1 0 1 1-.002-1.998A1 1 0 0 1 16 15zm1-5h-4.382l-1.724-3.447-1.788.894L10.382 10H7V5h10v5z"
    />
  </Svg>
);

export default SvgComponent;
