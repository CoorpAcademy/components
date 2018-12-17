import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12.001 24c-2.346 0-10-.217-10-3 0-1.312 1.531-2.153 4.819-2.647l.297 1.978c-1.404.212-2.255.472-2.726.673 1.049.439 3.669.996 7.61.996 3.941 0 6.561-.557 7.61-.997-.475-.202-1.334-.466-2.757-.677l.294-1.979c3.311.492 4.853 1.335 4.853 2.652 0 2.784-7.654 3.001-10 3.001z"
    />
    <G fill="currentColor">
      <Circle cx={12.001} cy={4} r={3} />
      <Path d="M12.001 7c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
