import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.25 10.75H6.5V16H4.75v-5.25H3V9h5.25v1.75zM14.375 16h-1.969l-.656-1.4-.656 1.4H9.125l1.641-3.5L9.125 9h1.969l.656 1.4.656-1.4h1.969l-1.641 3.5 1.641 3.5zm6.125-5.25h-1.75V16H17v-5.25h-1.75V9h5.25v1.75z"
    />
  </Svg>
);

export default SvgComponent;
