import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 15V3.003a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1V15h22zM8 4h8v5c0 2-4 4-4 4s-4-2-4-4V4z" />
      <Path d="M11 10h2V9h1V7h-1V6h-2v1h-1v2h1zM23 16.021l-22-.018c-.754.044-1.113.672-.971 1.243l.758 3.029c.246.986 1.197 1.728 2.213 1.728h18c1.016 0 1.967-.742 2.213-1.727l.758-3.029c.142-.576-.235-1.226-.971-1.226zm-1.728 3.77c-.022.087-.182.212-.272.212H3c-.09 0-.25-.125-.273-.213l-.446-1.787H9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h6.719l-.447 1.788z" />
    </G>
  </Svg>
);

export default SvgComponent;
