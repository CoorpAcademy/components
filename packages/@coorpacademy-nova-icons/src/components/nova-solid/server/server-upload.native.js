import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M0 13h15.408A6.953 6.953 0 0 1 19 12c.34 0 .672.033 1 .08V7H0v6zm16-4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM8 9v2H3V9h5zM20 6V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4h20zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 2h5v2H3V2zM12 19c0-.511.059-1.007.162-1.486A.974.974 0 0 1 12 17c0-.428.271-.786.648-.93A7.032 7.032 0 0 1 14.105 14H0v4c0 1.103.896 2 2 2h10.08a7.014 7.014 0 0 1-.08-1zm-4-1H3v-2h5v2zM23.707 19.292L19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
