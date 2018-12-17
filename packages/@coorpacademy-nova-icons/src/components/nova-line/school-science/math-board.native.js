import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 3H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2v7h2v-2h14v2h2v-7h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-4 17H5v-3h14v3zm3-5H2V5h20v10zM10 0h4v2h-4z" />
      <Path d="M18.5 13H20V7.75a.75.75 0 0 0-.75-.75H17v1.5h1.5V13zM4.75 13H8.5v-1.5h-3v-.75h2.25c.415 0 .75-.335.75-.75V7.75A.75.75 0 0 0 7.75 7H4v1.5h3v.75H4.75A.75.75 0 0 0 4 10v2.25c0 .415.335.75.75.75zM12 13h2v-2h2V9h-2V7h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
