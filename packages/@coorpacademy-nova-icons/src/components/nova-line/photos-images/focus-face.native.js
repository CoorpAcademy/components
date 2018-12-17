import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 11.999h-3v2h3c1.103 0 2-.897 2-2v-3h-2v3zM20 1.999h-3v2h3v3h2v-3c0-1.103-.897-2-2-2zM4 3.999h3v-2H4c-1.103 0-2 .897-2 2v3h2v-3zM7 13.999v-2H4v-3H2v3c0 1.103.897 2 2 2h3zM12 13.999c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM12 14.999c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6zm-5.841 5c.598-1.808 2.833-3 5.841-3s5.243 1.192 5.841 3H6.159z" />
    </G>
  </Svg>
);

export default SvgComponent;
