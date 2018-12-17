import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.754 21.107l-.172-.015C20.516 21.092 14 21.057 14 18v-1h4a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2h4v1c0 3.049-6.516 3.185-6.582 3.185l-.168.014c-.798.136-1.31.76-1.244 1.519.065.755.681 1.282 1.498 1.282h16.992c1.295 0 1.474-.911 1.498-1.19.07-.808-.487-1.572-1.24-1.703zM5 12h5v2h4v-2h5c2.206 0 4-1.794 4-4s-1.794-4-4-4c-1.231 0-2.321.571-3.056 1.45C15.673 3.506 14.017 2 12 2S8.327 3.506 8.056 5.45C7.321 4.571 6.231 4 5 4 2.794 4 1 5.794 1 8s1.794 4 4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
