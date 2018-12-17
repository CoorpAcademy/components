import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.652 10.595l1.41 1.41 1.409-1.41a1.951 1.951 0 0 0-1.409-.59c-.55 0-1.05.22-1.41.59zM11.826 7.769l1.427 1.427c.746-.751 1.734-1.193 2.814-1.193 1.078 0 2.063.439 2.81 1.188l1.428-1.429a5.943 5.943 0 0 0-4.237-1.759 6.037 6.037 0 0 0-4.242 1.766z" />
      <Path d="M16.067 2.003A9.973 9.973 0 0 0 9 4.942l1.413 1.415a7.973 7.973 0 0 1 11.303-.007l1.413-1.413a9.97 9.97 0 0 0-7.062-2.934zM11 12.005H5v-6h3v-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9h-2v1zm-3 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
