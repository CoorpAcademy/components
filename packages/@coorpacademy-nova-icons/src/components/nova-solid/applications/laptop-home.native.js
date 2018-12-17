import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 16.021L1 16v.003c-.754.044-1.112.672-.97 1.243l.757 3.029c.246.986 1.197 1.728 2.213 1.728h18c1.016 0 1.967-.742 2.213-1.727l.758-3.029c.143-.576-.235-1.226-.971-1.226zm-2 3.982H3c-.09 0-.25-.125-.273-.213l-.446-1.787H9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h6.72l-.447 1.788c-.022.087-.182.212-.273.212zM23 3.003a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1V15h22V3.003zm-7.707 6.704L15 9.414V12h-2V9h-2v3H9V9.414l-.293.293-1.414-1.414L12 3.586l4.707 4.707-1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
