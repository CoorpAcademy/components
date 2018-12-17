import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M4.001 22c0-.702.127-1.373.35-2H3.335C1.494 20 .001 21.159.001 23v1h4v-2zM7.593 16.509l.001-.009a2.5 2.5 0 0 0-5 0c0 1.291.981 2.34 2.235 2.474a6.033 6.033 0 0 1 2.764-2.465zM19.093 14a2.5 2.5 0 0 0-2.499 2.5c0 .035.009.068.01.103a6.021 6.021 0 0 1 2.58 2.389A2.496 2.496 0 0 0 19.093 14zM20.667 20h-1.016a5.95 5.95 0 0 1 .35 2v2h4v-1c0-1.841-1.493-3-3.334-3zM6.001 24h12v-2a3.998 3.998 0 0 0-3.147-3.904c-.811.566-1.792.904-2.853.904s-2.043-.338-2.853-.904A3.998 3.998 0 0 0 6.001 22v2z"
    />
    <Circle fill="currentColor" cx={12.001} cy={14} r={3} />
    <Path
      fill="currentColor"
      d="M17.001 0h-10a2 2 0 0 0-2 2v11l3-3h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 8h-8V6h8v2zm0-4h-8V2h8v2z"
    />
  </Svg>
);

export default SvgComponent;
