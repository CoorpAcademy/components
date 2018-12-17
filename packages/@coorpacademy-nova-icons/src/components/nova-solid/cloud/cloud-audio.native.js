import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 13.001c0-.897 1.018-1.509 1.018-1.509l5.792-2.896c.12-.513.19-1.045.19-1.595 0-3.859-3.141-7-7-7-2.51 0-4.74 1.31-5.978 3.357.966.457 1.996 1.263 2.971 2.646l-.818.577C7.678 4.455 6.393 4.001 5 4.001c-2.757 0-5 2.243-5 5s2.243 5 5 5h8v-1zM23.525 11.15a1 1 0 0 0-.973-.044l-6 3c-.338.17-.552.516-.552.895v4.051a2.5 2.5 0 1 0 1.949 2.949H18v-6.382l4-2v3.433a2.5 2.5 0 1 0 1.949 2.949H24v-8c0-.347-.18-.668-.475-.851z" />
    </G>
  </Svg>
);

export default SvgComponent;
