import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 1.005H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2zM10 3.005H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2zM14.939 16.694l3.089-4.546a3.968 3.968 0 0 1 .725-2.621c.075-.102.166-.184.247-.279V7.005a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v8c0 .714.377 1.336.939 1.689zM23.169 10.24a2.004 2.004 0 0 0-2.793.456 1.994 1.994 0 0 0-.183 2.008l-6.815 10.131L15 24.005l6.83-10.154a1.992 1.992 0 0 0 1.793-.816 2.004 2.004 0 0 0-.454-2.795z" />
    </G>
  </Svg>
);

export default SvgComponent;
