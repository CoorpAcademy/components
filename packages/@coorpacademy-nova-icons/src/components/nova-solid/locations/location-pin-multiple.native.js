import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 4c-2.008 0-3.655 1.486-3.941 3.414a5.333 5.333 0 0 1 3.274 4.919c0 .672-.16 1.422-.41 2.2C17.534 15.415 18 16 18 16s4-5 4-8a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 10zM9.941 7.414C9.655 5.486 8.008 4 6 4a4 4 0 0 0-4 4c0 3 4 8 4 8s.466-.585 1.077-1.467c-.251-.778-.41-1.528-.41-2.2a5.333 5.333 0 0 1 3.274-4.919zM4 8a2 2 0 1 1 4.001.001A2 2 0 0 1 4 8z" />
      <Path d="M12 9a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 15z" />
    </G>
  </Svg>
);

export default SvgComponent;
