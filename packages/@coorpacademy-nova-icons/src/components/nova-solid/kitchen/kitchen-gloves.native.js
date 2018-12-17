import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M22 8.854v-4a2 2 0 0 0-2-2c-1.104 0-2 1-2 2-4-4-6.047-2.951-8-1a4.931 4.931 0 0 0-1.295 2.302c.29.207.584.431.888.688.556-.751 1.446-1.258 2.407-1.258 1.655.002 3 1.348 3 3v3.587l1.487 1.487 4.159-4.16.927.927-6 6L17 17.854l7-7-2-2z" />
      <Path d="M14 12.586v-4a2 2 0 0 0-2-2c-1.104 0-2 1-2 2-4-4-6.047-2.952-8-1a4.917 4.917 0 0 0 0 7l7 7 7-7-2-2zm-5.646 6.622l-.927-.927 5.021-5.021.927.927-5.021 5.021z" />
    </G>
  </Svg>
);

export default SvgComponent;
