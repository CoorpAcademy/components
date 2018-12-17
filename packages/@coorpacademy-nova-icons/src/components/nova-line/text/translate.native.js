import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 10h-7v2h6v10H12v-6h-2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1z" />
      <Path d="M14.919 21.394L15.517 20h2.967l.598 1.394 1.838-.788-3-7a1.001 1.001 0 0 0-1.839 0l-3 7 1.838.788zM17.627 18h-1.253L17 16.538 17.627 18zM6 7.381l1 .5 1-.5V6H6z" />
      <Path d="M14 0H0v14h14V0zm-2 6h-2v2a.997.997 0 0 1-.553.894L9.236 9l2.211 1.105-.895 1.789L7 10.118l-3.553 1.776-.895-1.789L4.764 9l-.211-.106A1 1 0 0 1 4 8V6H2V4h4V2h2v2h4v2zM23 3h-3.586l1.293-1.293L19.293.293 15.586 4l3.707 3.707 1.414-1.414L19.414 5H22v3h2V4a1 1 0 0 0-1-1zM4.293 17.707L5.586 19H2v-3H0v4a1 1 0 0 0 1 1h4.586l-1.293 1.293 1.414 1.414L9.414 20l-3.707-3.707-1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
