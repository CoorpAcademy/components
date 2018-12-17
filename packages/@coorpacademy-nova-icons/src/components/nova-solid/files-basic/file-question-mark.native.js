import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M15.414 1H4c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L15.414 1zM11 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.126V17h-2v-2h1c1.103 0 2-.898 2-2 0-1.102-.897-2-2-2s-2 .898-2 2H7c0-2.206 1.794-4 4-4s4 1.794 4 4a4.01 4.01 0 0 1-3 3.874zM14 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
