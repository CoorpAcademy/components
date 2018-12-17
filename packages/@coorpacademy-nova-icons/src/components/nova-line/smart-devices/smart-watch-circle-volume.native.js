import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <Path
      d="M10 10.001H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1l2 2v-8l-2 2zM14.416 14.358l-.773-1.285a1.24 1.24 0 0 0 .607-1.072c0-.44-.226-.84-.604-1.07l.781-1.281a2.735 2.735 0 0 1 1.322 2.352 2.761 2.761 0 0 1-1.333 2.356z"
      fill="currentColor"
    />
    <Path
      d="M17.537 6.24L15.754.001H8.246L6.463 6.24a7.97 7.97 0 0 0 0 11.522l1.783 6.239h7.508l1.783-6.239a7.97 7.97 0 0 0 0-11.522zM9.754 2.001h4.492l.738 2.583a7.945 7.945 0 0 0-5.968 0l.738-2.583zm4.492 20H9.754l-.738-2.583c.924.373 1.93.583 2.984.583s2.061-.21 2.984-.583l-.738 2.583zm-2.247-4.002a6 6 0 0 1 0-12 6 6 0 0 1 0 12z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
