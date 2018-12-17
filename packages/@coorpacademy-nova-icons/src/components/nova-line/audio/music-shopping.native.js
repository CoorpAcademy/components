import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 9h-4.42l-3.712-6.496-1.736.992L16.277 9H7.723l3.145-5.504-1.736-.992L5.42 9H1v2h1.166l1.851 10.179A1 1 0 0 0 5 22h14c.483 0 .897-.346.984-.821L21.834 11H23V9zm-4.834 11H5.834l-1.636-9h15.604l-1.636 9z" />
      <Path d="M9.5 19a1.5 1.5 0 0 0 1.497-1.469L11 14.925l3.5-1.142V15a1.5 1.5 0 0 0 0 3c.796 0 1.441-.622 1.49-1.406L16 12.75a.746.746 0 0 0-.31-.606.743.743 0 0 0-.673-.106l-5 1.63a.75.75 0 0 0-.517.712V16a1.5 1.5 0 0 0 0 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
