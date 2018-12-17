import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.532 1.613 6.917 4H5.083C6.468 5.613 9.047 4 12 4zM4.263 14H8c.551 0 1 .449 1 1v4.411A8.025 8.025 0 0 1 4.263 14zM11 19.931V15c0-1.654-1.346-3-3-3H4c0-.691.098-1.359.263-2h15.474c.165.641.263 1.309.263 2h-4c-1.654 0-3 1.346-3 3v4.931c-.328.041-.661.069-1 .069s-.671-.028-1-.069zm4-.52V15c0-.551.449-1 1-1h3.737A8.025 8.025 0 0 1 15 19.411z" />
      <Circle cx={12} cy={12} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
