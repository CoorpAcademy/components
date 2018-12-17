import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22.857 9.486l-3-5A.997.997 0 0 0 19 4h-1V3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1H9V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H5a.997.997 0 0 0-.857.486l-3 5A1 1 0 0 0 2 11v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V11a.998.998 0 0 0 .857-1.514zM5.566 6h12.867l1.8 3H3.766l1.8-3zM20 22h-6v-1a2 2 0 0 0-4 0v1H4V11h16v11z" />
      <Path d="M6 12h5v2H6zM13 12h5v2h-5zM6 16h5v2H6zM13 16h5v2h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
