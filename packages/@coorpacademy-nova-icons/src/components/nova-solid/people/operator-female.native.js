import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.535 16.551l-.509-.172L12 18.732l-3.026-2.354-.509.172C5.669 17.492 4 19.529 4 22v2h16v-2c0-2.471-1.669-4.508-4.465-5.449zM18 22h-4v-2h4v2zM13 12.821A2.934 2.934 0 0 1 12 13a2.997 2.997 0 0 1-2.796-1.938c.046-.029.098-.052.143-.082C10.652 10.102 11.713 8.708 12 7c.196 1.166.76 2.186 1.516 3h5.431C18.044 1.015 5 1.346 5 11v2h3a4.95 4.95 0 0 0 4 2 4.99 4.99 0 0 0 1-.113v-2.066z" />
      <Path d="M20 7v2a3.972 3.972 0 0 1-1 2.631V11h-4v4h1c3.309 0 6-2.691 6-6V7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
