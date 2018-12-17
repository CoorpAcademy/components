import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 13h-6l-1 3H8l-1-3H1a1 1 0 1 0 0 2h1.444l1.208 5.434A1.999 1.999 0 0 0 5.604 22h12.791c.938 0 1.749-.65 1.952-1.566L21.556 15H23a1 1 0 1 0 0-2z" />
      <Path d="M15.995 12.715a2.001 2.001 0 0 0-1.861-2.131l.468-6.984a1.499 1.499 0 1 0-2.993-.201l-.469 6.984a2 2 0 0 0-2.129 1.863L8.825 15h7.016l.154-2.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
