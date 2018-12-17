import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zm-7 6c0 .186-.023.37-.055.547l1.019.588-1 1.732-1.027-.593a2.965 2.965 0 0 1-.936.542V17h-2v-1.184a2.985 2.985 0 0 1-.938-.542l-1.026.593-1-1.732 1.019-.588C9.023 13.37 9 13.186 9 13s.023-.367.055-.545l-1.019-.588 1-1.732 1.026.593c.275-.235.59-.42.938-.543V9h2v1.185c.348.123.662.307.938.542l1.026-.593 1 1.732-1.019.588c.032.179.055.36.055.546zm5-7H4V5h16v1z" />
      <Circle cx={12} cy={13} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
