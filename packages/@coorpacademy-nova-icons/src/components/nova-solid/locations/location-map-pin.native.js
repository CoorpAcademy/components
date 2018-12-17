import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M19.555 19.831A.998.998 0 0 0 20 19v-3h-2v2.465l-4 2.667V9a1 1 0 0 0-.375-.781l-5-4a1.065 1.065 0 0 0-.589-.211 1.069 1.069 0 0 0-.591.16l-6 4A1 1 0 0 0 1 9v14a1 1 0 0 0 1.555.831l5.392-3.594 4.429 3.543c.18.146.401.22.624.22a.985.985 0 0 0 .433-.098l6.122-4.071zM7 18.465l-4 2.667V9.535l4-2.667v11.597zM23 6a4 4 0 1 0-8 0c0 3 4 8 4 8s4-5 4-8zm-6 0a2 2 0 1 1 4.001.001A2 2 0 0 1 17 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
