import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.293 6.294l1.414 1.414L17.414 4 13.707.294l-1.414 1.414L13.586 3H4v2h9.586zM5.707 17.708l-1.414-1.414L.586 20l3.707 3.708 1.414-1.414L4.414 21H11v-2H4.414zM18 12c-3.309 0-6 2.692-6 6 0 3.309 2.691 6 6 6s6-2.691 6-6c0-3.308-2.691-6-6-6zm0 10c-2.205 0-4-1.794-4-4s1.795-4 4-4 4 1.794 4 4-1.795 4-4 4z" />
      <Path d="M19 15h-2v4h3v-2h-1zM9.5 11h-1a.5.5 0 0 1 0-1H12V8h-2V7H8v1.05c-1.14.233-2 1.242-2 2.45C6 11.878 7.121 13 8.5 13h1a.5.5 0 0 1 0 1H6v2h2v1h2v-1.05c1.14-.232 2-1.242 2-2.45 0-1.378-1.121-2.5-2.5-2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
