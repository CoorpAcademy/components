import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <Path
      d="M12.067 7.999a6.031 6.031 0 0 0-4.241 1.767l1.427 1.427C9.999 10.442 10.987 10 12.067 10c1.078 0 2.063.439 2.81 1.188l1.428-1.429a5.936 5.936 0 0 0-4.238-1.76z"
      fill="currentColor"
    />
    <Path
      d="M12.067 3.999A9.973 9.973 0 0 0 5 6.938l1.413 1.414a7.976 7.976 0 0 1 5.654-2.354c2.134 0 4.154.852 5.649 2.347l1.413-1.412a9.974 9.974 0 0 0-7.062-2.934zM17 20.999h-2c-1.103 0-2-.896-2-2v-4c0-1.104.897-2 2-2h4v2h-4v4h2v-1h-1v-2h3v3c0 1.104-.897 2-2 2zM10 20.999H8v-2H5a1.001 1.001 0 0 1-.97-1.242l1-4a1 1 0 0 1 .97-.758h3a1 1 0 0 1 1 1v3h1v2h-1v2zm-3.719-4H8v-2H6.781l-.5 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
