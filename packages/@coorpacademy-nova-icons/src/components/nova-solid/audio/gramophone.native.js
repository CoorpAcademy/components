import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 15.003h10v2H5z" />
      <Path d="M20.463 11.159l-5.926-9.312c-.296-.464-.778-.464-1.074 0l-5.926 9.312c-.296.463-.094.918.449 1.007l10.027 1.672c.544.09.987.615.987 1.165v3H3v4h2v-1h10v1h2v-2h3c.55 0 1-.45 1-1v-6c0-.55-.241-1.38-.537-1.844z" />
    </G>
  </Svg>
);

export default SvgComponent;
