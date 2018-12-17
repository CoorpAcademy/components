import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.869 7.998l2.963-4.445A.998.998 0 0 0 20 1.998h-5v2h3.131l-2.963 4.445A.998.998 0 0 0 16 9.998h5v-2h-3.131zM9 17.583V2.998H7v14.585L4.707 15.29l-1.414 1.414L8 21.411l4.707-4.707-1.414-1.414zM20 13.998h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2v-7a1 1 0 0 0-1-1zm-3 4v-2h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
