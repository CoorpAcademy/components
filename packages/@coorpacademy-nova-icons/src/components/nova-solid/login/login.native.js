import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2c-5.177 0-9.446 3.954-9.949 9H13.59l-2.297-2.292 1.413-1.416 4.708 4.699-4.706 4.715-1.416-1.412L13.582 13H2.051c.503 5.046 4.772 9 9.949 9 5.514 0 10-4.486 10-10S17.514 2 12 2z"
    />
  </Svg>
);

export default SvgComponent;
