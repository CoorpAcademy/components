import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 16h4v4H4zM4 10h4v4H4zM10 12.651V14h1.349A9.055 9.055 0 0 1 10 12.651z" />
      <Path d="M16 15.942V22H2V8h6.059C8.023 7.671 8 7.338 8 7s.023-.67.059-1H0v18h18v-8.058c-.329.035-.662.058-1 .058s-.671-.023-1-.058z" />
      <Path d="M10 16h4v4h-4zM17.707.293a1 1 0 0 0-1.414 0l-6 6 1.414 1.413L13 6.414V11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.414l1.293 1.292 1.414-1.413-6-6zM18 10h-2V7h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
