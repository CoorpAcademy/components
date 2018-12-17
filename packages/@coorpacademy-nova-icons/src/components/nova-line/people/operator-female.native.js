import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15v-2c-1.654 0-3-1.346-3-3v-.267c1.362-.514 2.359-1.378 3-2.085.754.832 2.002 1.883 3.757 2.322l.485-1.941c-2.199-.55-3.365-2.51-3.375-2.525a1 1 0 0 0-.865-.502c-.382-.039-.689.189-.869.498-.012.02-1.178 1.979-3.377 2.529A1.002 1.002 0 0 0 7 9v1H5.071C5.558 6.612 8.479 4 12 4c2.145 0 4.143.965 5.481 2.646L19.046 5.4A8.963 8.963 0 0 0 12 2c-4.962 0-9 4.037-9 9v1h4.424A5.002 5.002 0 0 0 12 15z" />
      <Path d="M19 8v2a3.004 3.004 0 0 1-2 2.828V11h-4v4h3c2.757 0 5-2.243 5-5V8h-2zM15.535 16.551l-.509-.172L12 18.732l-3.026-2.354-.509.172C5.669 17.492 4 19.529 4 22v2h16v-2c0-2.471-1.669-4.508-4.465-5.449zM6 22c0-1.457.944-2.664 2.612-3.369L12 21.268l3.388-2.637C17.056 19.336 18 20.543 18 22H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
