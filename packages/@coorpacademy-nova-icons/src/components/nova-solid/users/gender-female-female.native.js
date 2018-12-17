import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.001 11c0-2.757-2.243-5-5-5s-5 2.243-5 5a5.007 5.007 0 0 0 4 4.898V19h-2v2h2v2h2v-2h2v-2h-2v-3.102a5.007 5.007 0 0 0 4-4.898zm-8 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM21.708 3.707l-1.414-1.414-1.414 1.414-1.414-1.414-1.414 1.414 1.414 1.414-1.712 1.712A4.963 4.963 0 0 0 13.002 6v2c1.654 0 3 1.346 3 3s-1.346 3-3 3v2c2.757 0 5-2.243 5-5a4.97 4.97 0 0 0-.833-2.754l1.712-1.711 1.414 1.414 1.414-1.414-1.414-1.414 1.413-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
