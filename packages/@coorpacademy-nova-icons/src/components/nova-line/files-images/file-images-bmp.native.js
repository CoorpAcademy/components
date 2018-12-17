import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.001h10v4h4v1h2V5.587l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.001H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM5.5 18.001c1.378 0 2.5-1.122 2.5-2.5 0-.565-.195-1.081-.513-1.5.318-.419.513-.935.513-1.5 0-1.378-1.122-2.5-2.5-2.5H2v8h3.5zm-1.5-6h1.5a.5.5 0 0 1 0 1H4v-1zm0 3h1.5a.5.5 0 0 1 0 1H4v-1zM19 10.001h-3v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4h-1v-2h1a1.001 1.001 0 0 1 0 2zM15 18.001v-7a1.002 1.002 0 0 0-1.832-.555L12 12.199l-1.168-1.752A1.002 1.002 0 0 0 9 11.001v7h2v-3.697l.168.252c.371.557 1.293.557 1.664 0l.168-.252v3.697h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
