import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2h-4a1 1 0 0 0-1 1v7h2V8h2v2h2V3a1 1 0 0 0-1-1zm-3 4V4h2v2h-2zM20.832 15.555A.998.998 0 0 0 20 14h-5v2h3.131l-2.963 4.445A.998.998 0 0 0 16 22h5v-2h-3.131l2.963-4.445zM9 17.586V3H7v14.586l-2.293-2.293-1.414 1.414L8 21.414l4.707-4.707-1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
