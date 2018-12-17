import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.295 3.299l-2.293 2.293V.006h-2v5.586l-2.293-2.293-1.414 1.414 4.707 4.707 4.707-4.707zM8.002 16.006c2.206 0 4-1.795 4-4s-1.794-4-4-4-4 1.795-4 4 1.795 4 4 4zm0-6c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2s-2-.897-2-2c0-1.104.897-2 2-2zM8.002 17.006c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6zm-5.841 5c.598-1.808 2.833-3 5.841-3s5.243 1.192 5.841 3H2.161z" />
    </G>
  </Svg>
);

export default SvgComponent;
