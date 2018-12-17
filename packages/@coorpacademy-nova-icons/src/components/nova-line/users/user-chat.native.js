import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M15.001 17a1 1 0 0 1-1-1v-2h-1v-2h2a1 1 0 0 1 1 1v1l2.4-1.8a1 1 0 0 1 .6-.2c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3h-6a3.01 3.01 0 0 0-2.887 2.184l-1.925-.543A5.016 5.016 0 0 1 13.001 2h6c2.757 0 5 2.243 5 5v2a5.006 5.006 0 0 1-4.65 4.988l-3.75 2.812c-.177.132-.388.2-.6.2z"
      fill="currentColor"
    />
    <Path
      d="M8.001 16c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4zm0-6c-1.103 0-2 .896-2 2 0 1.103.897 2 2 2s2-.897 2-2c0-1.104-.897-2-2-2zM16.001 24h-16v-1c0-3.533 3.29-6 8-6s8 2.467 8 6v1zM2.16 22h11.683c-.598-1.808-2.833-3-5.841-3s-5.244 1.192-5.842 3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
