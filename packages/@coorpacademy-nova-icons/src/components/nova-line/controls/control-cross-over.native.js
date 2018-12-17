import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M19.707 10.707L23.414 7l-3.707-3.707-1.414 1.414L19.586 6H17c-2.994 0-4.9 2.086-6.5 4.275C8.9 8.086 6.994 6 4 6H0v2h4c2.275 0 3.772 1.874 5.276 4C7.772 14.126 6.275 16 4 16H0v2h4c2.994 0 4.9-2.086 6.5-4.275C12.1 15.914 14.006 18 17 18h2.586l-1.293 1.293 1.414 1.414L23.414 17l-3.707-3.707-1.414 1.414L19.586 16H17c-2.275 0-3.772-1.874-5.276-4C13.228 9.874 14.725 8 17 8h2.586l-1.293 1.293 1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
