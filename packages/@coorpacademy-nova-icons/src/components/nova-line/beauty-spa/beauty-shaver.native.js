import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.485 10.486l-2.121 2.121-1.415-1.414 2.122-2.121-1.414-1.414-2.122 2.121-1.414-1.415 2.122-2.12-1.414-1.415-2.121 2.121-1.415-1.415 2.121-2.121L13 2l-2.828 2.828a1 1 0 0 0-.15.193L7.9 8.557a1 1 0 0 0 .15 1.221l.707.708L3.1 16.142c-.378.378-.586.88-.586 1.414s.208 1.037.586 1.414l2.828 2.829c.378.378.88.586 1.415.586s1.037-.208 1.415-.586l5.656-5.657.707.708a.999.999 0 0 0 1.221.149l3.536-2.121a1 1 0 0 0 .193-.15l2.828-2.828-1.414-1.414zM7.344 20.385l-2.83-2.829 5.657-5.656L13 14.728l-5.656 5.657zm8.639-5.503l-5.966-5.967 1.061-1.768 6.674 6.673-1.769 1.062z" />
      <Path d="M8.051 15.434a1 1 0 1 0 1.413 1.414 1 1 0 0 0-1.413-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
