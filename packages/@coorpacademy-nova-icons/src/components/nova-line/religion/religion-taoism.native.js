import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M16.417 2H7.593L2 7.641V16.5L8.149 22h8.262L22 16.471V7.642L16.417 2zm.786 6.79l-1.986-1.987 1.054-2.107 3.037 3.07-2.105 1.024zM13.586 16h-3.172L8 13.586v-3.171L10.418 8h3.167L16 10.414v3.172L13.586 16zm-.204-10h-2.758l-.998-2h4.756l-1 2zm-4.594.802L6.797 8.79 4.693 7.765l3.044-3.07 1.051 2.107zM6 10.625v2.764l-2 1.026V9.651l2 .974zm.809 4.598l1.975 1.974-.928 1.856-3.103-2.776 2.056-1.054zM10.618 18h2.764l1 2H9.618l1-2zm4.599-.803l1.975-1.974 2.124 1.089-3.038 3.006-1.061-2.121zM18 13.389v-2.764l2-.974v4.764l-2-1.026z" />
      <Circle cx={12} cy={12} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
