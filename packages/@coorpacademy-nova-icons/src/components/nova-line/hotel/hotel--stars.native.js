import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4.089 8.825l2.45 1.843-.816-2.68 2.45-1.987H5.11L4.089 3.668 3.067 6.001H.005l2.45 1.987-.816 2.68zM9.634 7.678l2.45-1.842 2.45 1.842-.817-2.68 2.45-1.987h-3.063L12.084.678l-1.021 2.333H7.999l2.45 1.987zM24.024 6.009h-3.062l-1.023-2.332-1.02 2.332h-3.063l2.451 1.987-.818 2.681 2.45-1.844 2.45 1.844-.815-2.681zM11 16h2v2h-2zM11 19h2v2h-2z" />
      <Path d="M21 17h-4v-3a1 1 0 0 0-1-1v-2a1 1 0 0 0-1-1h-2V8h-2v2H9a1 1 0 0 0-1 1v2a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-11-5h4v1h-4v-1zm-6 7h3v3H4v-3zm5 3v-7h6v7H9zm11 0h-3v-3h3v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
