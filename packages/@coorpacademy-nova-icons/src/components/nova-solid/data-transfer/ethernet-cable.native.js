import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 3.001H4c-1.103 0-2 .897-2 2v14c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2v-14c0-1.103-.896-2-2-2zm-1 13h-4v2H9v-2H5v-10h2v5h2v-5h2v5h2v-5h2v5h2v-5h2v10z"
    />
  </Svg>
);

export default SvgComponent;
