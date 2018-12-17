import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1.002 1.002 0 0 0-1.211-.502l-4.757 1.586A.998.998 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4A.999.999 0 0 0 20 17zM2 22v-6h2v6H2zm14.5-1H6v-4.279l4.494-1.497.29.579-1.49 1.49A1 1 0 0 0 10 19h8l-1.5 2zM17 0c-3.814 0-7 3.066-7 7 0 3.86 3.14 7 7 7s7-3.14 7-7c0-3.93-3.218-7-7-7zm0 12c-2.757 0-5-2.243-5-5 0-1.747.899-3.322 2.338-4.226L13.5 6.125 17 10.5l.875-2.625L20 7V4h-2V2.111A4.992 4.992 0 0 1 22 7c0 2.757-2.243 5-5 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
