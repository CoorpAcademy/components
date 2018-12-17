import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M19.555 19.832c.278-.186.445-.498.445-.832v-3h-2v2.465l-4 2.667V9a1 1 0 0 0-.375-.781l-5-4a1.08 1.08 0 0 0-.591-.211 1.058 1.058 0 0 0-.588.16l-6 4A1 1 0 0 0 1 9v14a1 1 0 0 0 1.555.832l5.392-3.594 4.429 3.543c.18.145.401.219.624.219a.855.855 0 0 0 .549-.176l6.006-3.992zM3 9.535l4-2.667v11.597l-4 2.667V9.535zm9 11.384l-3-2.4V7.082l3 2.399v11.438zM19 14.667l.8-1.067c.131-.174 3.2-4.305 3.2-7.6 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 3.295 3.069 7.426 3.2 7.6l.8 1.067zM19 4c1.103 0 2 .898 2 2 0 1.615-1.109 3.778-2 5.214C18.108 9.781 17 7.62 17 6c0-1.102.897-2 2-2z" />
      <Circle cx={19} cy={6} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
