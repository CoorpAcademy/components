import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 11.126l4.338-2.603A1.986 1.986 0 0 0 15 8H9c-.517 0-.982.201-1.338.523L12 11.126z" />
      <Path d="M12.386 12.644a.758.758 0 0 1-.772 0L7.012 9.882C7.01 9.922 7 9.96 7 10v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4c0-.04-.01-.078-.012-.118l-4.602 2.762z" />
      <Path d="M20.768 14c-.912 4.002-4.493 7-8.768 7-4.055 0-7.488-2.696-8.611-6.389L6 12H0v6l1.827-1.827C3.475 20.174 7.412 23 12 23c5.382 0 9.865-3.888 10.809-9h-2.041zM22.173 7.827C20.525 3.826 16.588 1 12 1 6.618 1 2.135 4.888 1.191 10h2.041C4.144 5.998 7.726 3 12 3c4.055 0 7.488 2.696 8.611 6.39L18 12h6V6l-1.827 1.827z" />
    </G>
  </Svg>
);

export default SvgComponent;
