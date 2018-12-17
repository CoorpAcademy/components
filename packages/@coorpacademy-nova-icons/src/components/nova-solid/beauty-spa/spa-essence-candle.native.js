import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M16.617 9c-2.801-2.682 1.919-2.734 1.919-4.464C18.536 3.688 17.848 3 17 3H7.036C6.188 3 5.5 3.688 5.5 4.536 5.5 6.153 9.947 6.543 7.382 9 4.354 11.899 2.618 17.71 5.5 21.32a1.7 1.7 0 0 0 1.36.68h10.315a1.7 1.7 0 0 0 1.36-.68c2.88-3.607 1.134-9.398-1.918-12.32zM16 20h-2v-2h-4v2H8v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7z" />
      <Path d="M12 12c1.667 1.667 1.667 2.475 1.667 3.333a1.667 1.667 0 1 1-3.334 0c0-2.043 2.204-1.077 1.667-3.333z" />
    </G>
  </Svg>
);

export default SvgComponent;
