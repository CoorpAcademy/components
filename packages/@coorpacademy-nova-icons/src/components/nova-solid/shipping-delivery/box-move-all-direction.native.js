import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M11 5.001h2v-2h2l-3-3-3 3h2zM13 19.001h-2v2H9l3 3 3-3h-2zM3 9.001l-3 3 3 3v-2h2v-2H3zM24 12.001l-3-3v2h-2v2h2v2z" />
      <G>
        <Path d="M12.486 10.457l5.009-2.312c-.042-.023-.078-.054-.124-.072l-5-2a1.002 1.002 0 0 0-.742 0l-5 2c-.016.006-.027.017-.043.024l5.9 2.36zM6.009 8.943c-.001.02-.009.038-.009.058v6c0 .409.249.776.629.929l5 2c.119.047.245.071.371.071V11.34L6.009 8.943zM13 11.321v6.357l4.371-1.749a1 1 0 0 0 .629-.928V9.014l-5 2.307z" />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
