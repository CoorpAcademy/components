import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.002 11h1.499v1.499H9.002zM18.748 11h1.499v1.499h-1.499z" />
      <Path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM6.753 13.251a2.252 2.252 0 0 1-2.25 2.249 2.252 2.252 0 0 1-2.249-2.249h1.5a.749.749 0 1 0 1.499 0V9.502h1.5v3.749zm5.248 2.247h-1.5v-1.5H9.002v1.5h-1.5v-5.249a.75.75 0 0 1 .75-.749h2.999a.75.75 0 0 1 .75.749v5.249zm3.734.002h-1.512l-1.472-5.998h1.498l.74 2.924.717-2.924h1.542L15.75 15.44l.016.06h-.031zm6.013-.002h-1.5v-1.5h-1.499v1.5h-1.5v-5.249a.75.75 0 0 1 .75-.749h2.999a.75.75 0 0 1 .75.749v5.249z" />
    </G>
  </Svg>
);

export default SvgComponent;
