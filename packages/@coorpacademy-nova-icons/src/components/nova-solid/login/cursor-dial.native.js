import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 3h4v4H2zM8 3h4v4H8zM2 9h4v4H2zM8 9h4v4H8zM2 15h4v4H2zM8 15h4v4H8zM14 3h4v4h-4zM15 21l-2-6h2V9h3v5l4 1v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
