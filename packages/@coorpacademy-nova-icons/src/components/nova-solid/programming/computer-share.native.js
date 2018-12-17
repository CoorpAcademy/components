import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 6h-1V1c0-.551-.448-1-1-1H8c-.552 0-1 .449-1 1v5H6v3h12V6zm-3 0h-2v1h-2V6H9V2h6v4z" />
      <Path d="M8.708 11.294a.997.997 0 0 0-1.414 0l-1.751 1.75-1.572-6.286A1 1 0 0 0 3 6H2c-.552 0-1 .449-1 1v9c0 .155.036.309.105.447L2.382 19h5.944l1.636-5.725a.996.996 0 0 0-.254-.981l-1-1zM8 20H2c-.552 0-1 .449-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM22 6h-1a.999.999 0 0 0-.97.758l-1.572 6.286-1.751-1.75a.997.997 0 0 0-1.414 0l-1 1a.996.996 0 0 0-.254.981L15.675 19h5.944l1.276-2.553c.069-.138.105-.292.105-.447V7a1 1 0 0 0-1-1zM22 20h-6c-.552 0-1 .449-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
