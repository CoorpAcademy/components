import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M20.999 14.998s-3 4.344-3 6a3 3 0 0 0 6 0c0-1.656-3-6-3-6zM20.788 9.385C20.49 9.001 13.403-.002 5.999-.002c-1.595 0-3.41.438-5.398 1.299l.797 1.836C3.132 2.379 4.681 1.998 6 1.998c5.402 0 11.014 6.031 12.701 8-1.686 1.971-7.289 8-12.701 8-1.318 0-2.867-.38-4.602-1.134L.601 18.7c1.988.861 3.804 1.298 5.398 1.298 7.404 0 14.491-9.003 14.789-9.386a.998.998 0 0 0 0-1.227z" />
      <Path d="M5.999 15.998c3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6a5.97 5.97 0 0 0-1.647.236l1.647 5.764L.234 8.351a6.008 6.008 0 0 0-.235 1.647c0 3.309 2.691 6 6 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
