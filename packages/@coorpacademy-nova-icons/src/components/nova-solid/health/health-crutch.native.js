import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M23 6.586L17.414 1C16.66.246 15.34.246 14.586 1L14 1.586a2.003 2.003 0 0 0 0 2.828L19.586 10a2 2 0 0 0 2.828 0L23 9.414a2.003 2.003 0 0 0 0-2.828zM15 12.586L11.414 9l3.035-3.035-1.414-1.414-5.742 5.742A1.003 1.003 0 0 0 7 11v4.586l-4.5 4.5-.793-.793-1.414 1.413 3 3 1.414-1.413-.793-.793 4.5-4.5H13a.994.994 0 0 0 .707-.294l5.742-5.742-1.414-1.414L15 12.586zM12.586 15H9v-3.586l1-1L13.586 14l-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
