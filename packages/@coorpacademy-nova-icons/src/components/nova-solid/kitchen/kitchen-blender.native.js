import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M17 5h-1.279l-.772-2.316A1 1 0 0 0 14 2H6a1 1 0 0 0-.949.684l-1 3a1 1 0 0 0-.032.512L5.78 15h2.04l-1.6-8h7.561l-1.601 8h2.04l1.601-8H17c.551 0 1 .449 1 1v7h2V8c0-1.654-1.346-3-3-3zM14.414 16H5.586l-1.293 1.293A1.002 1.002 0 0 0 4 18v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3c0-.265-.106-.52-.293-.707L14.414 16zM10 20.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      <Path d="M9 11h2v4H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
