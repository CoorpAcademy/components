import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 22H4c-1.103 0-2-.897-2-2V6c0-1.102.897-2 2-2h7v2H4v14h14v-9h2v9c0 1.103-.897 2-2 2z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M9.808 10.365l2.828 2.827-3.535.707zM20.414 5.414a2 2 0 1 0-2.828-2.828L11.222 8.95l2.829 2.829 6.363-6.365z"
    />
  </Svg>
);

export default SvgComponent;
