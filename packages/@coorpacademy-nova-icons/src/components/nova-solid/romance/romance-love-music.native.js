import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M13.782 7.023l-9 2a.998.998 0 0 0-.783.975v8.184a2.986 2.986 0 0 0-1-.184 3 3 0 1 0 3 3V13.8l7-1.556v3.938a2.986 2.986 0 0 0-1-.184 3 3 0 1 0 3 3v-11c0-.302-.138-.589-.375-.78a.991.991 0 0 0-.842-.195zM23.999 1.498a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0-3 0c0 1.5 3 4.5 3 4.5s3-3 3-4.5zM14.999-.002a1 1 0 0 0-1 1 1 1 0 1 0-2 0c0 1 2 3 2 3s2-2 2-3a1 1 0 0 0-1-1zM21.999 7.998a1 1 0 0 0-1 1 1 1 0 1 0-2 0c0 1 2 3 2 3s2-2 2-3a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
