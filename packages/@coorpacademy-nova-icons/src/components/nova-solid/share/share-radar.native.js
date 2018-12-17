import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.707 13.606L10.393 2.293a.999.999 0 0 0-1.414 0 8.938 8.938 0 0 0-2.637 6.363c0 2.403.936 4.664 2.637 6.363 1.7 1.699 3.961 2.637 6.364 2.637s4.664-.938 6.364-2.637a.997.997 0 0 0 0-1.413zM17.645 7.645l.748-.75c.193.062.394.105.607.105a2 2 0 1 0-1.955-1.584l-.815.815 1.415 1.414zM6.707 14.293a.998.998 0 0 0-1.601.26l-3 6A1 1 0 0 0 3 22h9a1.002 1.002 0 0 0 .707-1.707l-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
