import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <Path fill="currentColor" d="M20 13h-2V4H6v9H4V2h16z" />
    <Path
      fill="currentColor"
      d="M11.6 8.4h2.8V6.8h-1.6V6h-1.6v.841c-.911.186-1.6.993-1.6 1.96 0 1.102.898 2 2 2h.8a.399.399 0 1 1 0 .798H9.6V13.2h1.6v.8h1.6v-.84a2.004 2.004 0 0 0 1.601-1.96c0-1.104-.897-2-2-2H11.6a.4.4 0 0 1 0-.8zM15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142z"
    />
  </Svg>
);

export default SvgComponent;
