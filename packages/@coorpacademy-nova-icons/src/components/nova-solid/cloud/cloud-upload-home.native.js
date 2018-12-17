import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 16h3l-4-4-4 4h3v5a1 1 0 0 0 1 1h4v-2H6v-4zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6zM18 22h-2v-3h2v3zM9.131 0C7.497 0 6.039.816 5.144 2.105c1.115.365 1.949 1.491 2.158 1.98-.014.011-.82.593-.85.613-1.046-1.516-1.946-1.841-2.921-1.841-1.93 0-3.5 1.603-3.5 3.571 0 1.97 1.57 3.571 3.5 3.571h5.6c2.702 0 4.9-2.242 4.9-5 0-2.756-2.198-4.999-4.9-4.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
