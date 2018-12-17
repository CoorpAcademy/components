import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.08 17.577c.224.16.879.423 1.92.423 1.03 0 1.682-.257 1.916-.432L12 13.736l-1.92 3.841z" />
      <Path d="M16.414 1H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.586L16.414 1zM16 17.5c0 1.496-1.607 2.5-4 2.5s-4-1.004-4-2.5v-.236l4-8 4 8v.236zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
