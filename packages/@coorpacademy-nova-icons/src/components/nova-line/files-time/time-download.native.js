import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 4v5.535l3.445 2.297 1.11-1.664L10 8.465V4z" />
      <Path d="M15.314 12h2.16c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c1.053 0 2.06-.191 3-.525v-2.16A6.941 6.941 0 0 1 9 16c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.859 0 7 3.14 7 7 0 1.075-.251 2.09-.686 3zM22.293 17.293L20 19.586V14h-2v5.586l-2.293-2.293-1.414 1.414L19 23.414l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
