import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M19 9a.999.999 0 0 0 .707-1.707l-7-6a.999.999 0 0 0-1.414 0l-7 6A1 1 0 0 0 5 9h2v5h3v-4h4v4h3V9h2zM14.5 16H13v6h3.75v-1.5H14.5zM1 17.875c0 1.034.841 1.875 1.875 1.875h.75a.376.376 0 0 1 0 .75H1V22h2.625c1.034 0 1.875-.841 1.875-1.875s-.841-1.875-1.875-1.875h-.75a.376.376 0 0 1 0-.75H5.5V16H2.875A1.877 1.877 0 0 0 1 17.875zM10.75 16h-3a.75.75 0 0 0-.75.75V22h1.5v-1.5H10V22h1.5v-5.25a.75.75 0 0 0-.75-.75zM10 19H8.5v-1.5H10V19zM22.5 17.5V16h-3.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3.75v-1.5h-3v-.75h2.25v-1.5H19.5v-.75h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
