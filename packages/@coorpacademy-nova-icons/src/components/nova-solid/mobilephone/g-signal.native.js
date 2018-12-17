import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.305 9.758a5.94 5.94 0 0 0-4.237-1.759 6.031 6.031 0 0 0-4.241 1.767l1.427 1.427C10 10.442 10.988 10 12.068 10c1.078 0 2.064.44 2.81 1.188l1.427-1.43z" />
      <Path d="M12.067 5.999c2.134 0 4.154.852 5.649 2.347l1.413-1.412a9.978 9.978 0 0 0-7.062-2.935A9.973 9.973 0 0 0 5 6.938l1.413 1.414a7.975 7.975 0 0 1 5.654-2.353zM13 14.999v4c0 1.104.897 2 2 2h2c1.103 0 2-.896 2-2v-3h-3v2h1v1h-2v-4h4v-2h-4c-1.103 0-2 .897-2 2zM10 13.999a1 1 0 0 0-1-1H6a.999.999 0 0 0-.97.758l-1 4A.998.998 0 0 0 5 18.999h3v2h2v-2h1v-2h-1v-3zm-2 3H6.281l.5-2H8v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
