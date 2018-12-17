import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 11.842v2.525c.647.659 1 1.394 1 2.133 0 2.44-3.664 4.5-8 4.5s-8-2.06-8-4.5c0-.739.353-1.474 1-2.133v-2.525c-1.908 1.21-3 2.879-3 4.658C2 20.146 6.393 23 12 23s10-2.854 10-6.5c0-1.779-1.092-3.448-3-4.658zM18.683 9.2l1.2 1.6c2.8-2.1 1.434-3.921.7-4.9-.745-.993-.9-1.2.3-2.1l-1.2-1.6c-2.8 2.1-1.434 3.922-.7 4.901.745.993.9 1.199-.3 2.099zM3.117 9.2l1.2 1.6c2.8-2.1 1.434-3.921.7-4.9-.745-.993-.9-1.2.3-2.1l-1.2-1.6c-2.8 2.1-1.434 3.922-.7 4.901.745.993.9 1.199-.3 2.099zM15 3c0-1.654-1.346-3-3-3S9 1.346 9 3s1.346 3 3 3 3-1.346 3-3zm-3 1a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" />
      <Path d="M8 14h1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h1a1 1 0 0 0 1-1v-2c0-2.757-2.243-5-5-5s-5 2.243-5 5v2a1 1 0 0 0 1 1zm1-3c0-1.654 1.346-3 3-3s3 1.346 3 3v1h-1a1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1H9v-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
