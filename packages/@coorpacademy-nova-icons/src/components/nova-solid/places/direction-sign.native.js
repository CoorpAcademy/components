import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M9 19h3v3H9zM18 12h-6v-1H9v1H5.414c-.265 0-.52.106-.707.293l-2 2a1 1 0 0 0 0 1.415l2 2a1 1 0 0 0 .707.292H18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM19.293 6.293l-2-2A1.003 1.003 0 0 0 16.586 4H12V2H9v2H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12.586c.265 0 .52-.106.707-.292l2-2a1 1 0 0 0 0-1.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
