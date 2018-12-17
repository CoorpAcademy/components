import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 13a2 2 0 1 0-2-2c0 .053.012.102.016.153l-2.701 1.351A1.983 1.983 0 0 0 9 12a2 2 0 0 0 0 4c.506 0 .963-.194 1.315-.504l2.701 1.351c-.004.051-.016.1-.016.153a2 2 0 1 0 2-2c-.506 0-.963.194-1.315.504l-2.701-1.351c.004-.051.016-.1.016-.153s-.012-.102-.016-.153l2.701-1.351c.352.31.809.504 1.315.504z" />
      <Path d="M19 2h-2V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H9V1a1 1 0 0 0-2 0v1H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM5 22V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2l.001 18H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
