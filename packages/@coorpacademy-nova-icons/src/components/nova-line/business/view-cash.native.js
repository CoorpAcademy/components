import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.707 21.293l-5.682-5.682A8.948 8.948 0 0 0 19 10c0-4.962-4.037-9-9-9s-9 4.038-9 9 4.037 9 9 9c2.121 0 4.07-.742 5.611-1.975l5.682 5.682 1.414-1.414zM10 17c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7z" />
      <Path d="M11 5H9v1.051C7.86 6.283 7 7.293 7 8.5 7 9.878 8.121 11 9.5 11h1a.5.5 0 0 1 0 1H7v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H13V6h-2V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
