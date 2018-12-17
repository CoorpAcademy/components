import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 8.001a2.5 2.5 0 0 0-2.5 2.5c0 2.5 2.5 5.5 2.5 5.5s2.5-3 2.5-5.5a2.5 2.5 0 0 0-2.5-2.5zm0 3.631a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      <Path d="M17.537 6.24L15.754.001H8.246L6.463 6.24a7.97 7.97 0 0 0 0 11.522l1.783 6.239h7.509l1.783-6.239a7.97 7.97 0 0 0-.001-11.522zM9.754 2.001h4.491l.738 2.583a7.936 7.936 0 0 0-5.967 0l.738-2.583zm4.492 20H9.754l-.738-2.583a7.945 7.945 0 0 0 5.968 0l-.738 2.583zm-2.247-4.002a6 6 0 0 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
