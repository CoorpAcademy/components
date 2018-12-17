import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.007H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-1.414 1l5 5h-5v-5zm-5.265 18H8.223l-.733-2.986-.739 2.926.016.059H5.224l-1.472-5.998h1.5l.738 2.925.718-2.925h1.543l.739 2.925.717-2.925h1.543l-1.499 5.939.015.059h-.031zm6.014-.001h-1.5v-1.5H12.75v1.5h-1.5v-5.25a.75.75 0 0 1 .75-.75h2.999a.75.75 0 0 1 .75.75v5.25zm2.999-.059l.016.059h-1.543l-1.472-5.998h1.5l.738 2.925.718-2.925h1.543l-1.5 5.939z" />
      <Path d="M12.75 15.507h1.499v1.5H12.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
