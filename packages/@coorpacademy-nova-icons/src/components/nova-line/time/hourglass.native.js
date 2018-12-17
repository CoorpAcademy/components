import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 5.171V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2.172c0 .79.32 1.563.879 2.121L10.586 12l-4.707 4.708A2.976 2.976 0 0 0 5 18.829V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.171a2.98 2.98 0 0 0-.879-2.122L13.414 12l4.707-4.707A3.02 3.02 0 0 0 19 5.171zm-2 13.658V20H7v-1.171c0-.268.104-.519.293-.708L12 13.414l4.707 4.708a.99.99 0 0 1 .293.707zm0-13.658c0 .263-.107.521-.293.707L12 10.585 7.293 5.878A1.008 1.008 0 0 1 7 5.171V4h10v1.171z" />
      <Path d="M9 19l3-3 3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
