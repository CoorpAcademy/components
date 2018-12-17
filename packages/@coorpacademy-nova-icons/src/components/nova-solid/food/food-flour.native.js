import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M8 7h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zm5-3h2v1h-2V4zM9 4h2v1H9V4zM16 8H8c-2.206 0-4 1.794-4 4v6c0 2.206 1.794 4 4 4h8c2.206 0 4-1.794 4-4v-6c0-2.206-1.794-4-4-4zm1 6v2h-3.586l-1 1H14v2h-3.586l-1.707 1.706-1.414-1.413L9 17.586V14h2v1.586l1-1V11h2v1.586L15.586 11 17 12.414 15.414 14H17z" />
    </G>
  </Svg>
);

export default SvgComponent;
