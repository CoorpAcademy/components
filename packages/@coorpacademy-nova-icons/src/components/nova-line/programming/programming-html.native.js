import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 5c0-1.103-.897-2-2-2H2C.897 3 0 3.897 0 5h24zM0 15v3c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-3H0zm2 3v-1h19.997v1H2zM2 11h2v3h2V8h2v6h2V8h2v6h2v-3.967l.293.439c.157.236.423.38.707.38s.55-.144.707-.38l.293-.439V14h2V7a1 1 0 0 0-1-1c-.57 0-.333.045-2 2.469C13.333 6.045 13.57 6 13 6a1 1 0 0 0-1 1V6H4v3H2V6H0v8h2v-3zM21 6h-2v8h5v-2h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
