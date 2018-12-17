import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2h20V2zM19.705 15.03c.184-.303.295-.651.295-1.03V6H0v8c0 1.102.896 2 2 2h15.027a4.959 4.959 0 0 1 2.678-.97zM8 13H3v-2h5v2zm2-3H3V8h7v2zm7 0h-4V8h4v2zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
