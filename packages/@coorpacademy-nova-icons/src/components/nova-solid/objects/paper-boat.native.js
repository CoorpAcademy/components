import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M9.718 12h5.056l2.547-1.273-4.506-6.309c-.377-.525-1.252-.525-1.629 0L6.81 10.546 9.718 12zM7.753 12.258l-4.306-2.152a1 1 0 0 0-1.384 1.246l2.633 7.02 3.057-6.114zM17.882 20l-3.5-7H9.618l-3.5 7zM21.669 10.257a1.001 1.001 0 0 0-1.116-.151l-4.306 2.152 3.057 6.113 2.633-7.02a1.001 1.001 0 0 0-.268-1.094z" />
    </G>
  </Svg>
);

export default SvgComponent;
