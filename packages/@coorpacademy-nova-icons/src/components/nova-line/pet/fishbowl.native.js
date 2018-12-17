import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M14 12c-1.127 0-2.652.636-3.768 1.19L8 12v4l2.232-1.19C11.348 15.365 12.873 16 14 16c2 0 3-2 3-2s-1-2-3-2z" />
      <Path d="M19.439 4.332L19.141 4H4.858l-.298.332A9.989 9.989 0 0 0 2 11c0 5.514 4.486 10 10 10s10-4.486 10-10c0-2.457-.91-4.825-2.561-6.668zM5.767 6h12.465a8.03 8.03 0 0 1 1.171 2H4.596a8.06 8.06 0 0 1 1.171-2zM12 19c-4.411 0-8-3.589-8-8 0-.336.028-.67.07-1h15.86c.042.33.07.664.07 1 0 4.411-3.589 8-8 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
