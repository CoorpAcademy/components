import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm2 7c-1.157 0-2.491.387-2.879 2H14v2h-2.879c.388 1.613 1.722 2 2.879 2v2c-2.183 0-4.494-1.078-4.923-4H8v-2h1.077c.429-2.921 2.74-4 4.923-4v2z"
    />
  </Svg>
);

export default SvgComponent;
