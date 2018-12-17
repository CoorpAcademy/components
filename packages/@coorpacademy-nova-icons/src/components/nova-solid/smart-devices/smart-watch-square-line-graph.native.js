import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <Path
      fill="currentColor"
      d="M11.907 15.493l-2-4-1.283 1.925-1.248-.832 2.717-4.075 2 4 1.506-2.259H16v1.5h-1.599z"
    />
    <Path
      fill="currentColor"
      d="M17 1.002a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .986v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.103-.897 2-2 2H8c-1.102 0-2-.897-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z"
    />
  </Svg>
);

export default SvgComponent;
