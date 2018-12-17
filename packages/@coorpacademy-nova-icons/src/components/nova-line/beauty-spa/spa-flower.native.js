import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.821 8.838c-1.171 1.23-1.845 2.521-.575 3.649 1.496 1.327 2.824-.168 3.484-.912.098-.109.391-.575.499-.575.109 0 .402.465.499.575.66.744 1.988 2.239 3.484.912 1.27-1.128.593-2.426-.574-3.649 1.61-.545 2.801-1.387 2.2-2.968-.602-1.586-2.055-1.419-3.624-.755C17.281 3.426 16.936 2 15.229 2s-2.052 1.427-1.986 3.115c-1.567-.664-3.02-.831-3.623.755-.603 1.589.594 2.417 2.201 2.968zM15.229 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 15.229 6zM20.895 17.553A1.001 1.001 0 0 0 20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1.002 1.002 0 0 0-1.211-.502l-4.757 1.586A.998.998 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4c.227-.303.264-.708.095-1.047zM2 22v-6h2v6H2zm14.5-1H6v-4.279l4.494-1.497.29.579-1.49 1.49A1 1 0 0 0 10 19h8l-1.5 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
