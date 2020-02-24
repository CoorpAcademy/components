import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 41 40" {...props}>
    <Path
      d="M6.1 36.7c-1.3 0-2.5-1.2-2.5-2.5V6.7H1.1c-.5 0-.9.3-.9.8v31.7c0 .5.3.8.8.8h31.7c.5 0 .8-.3.8-.8v-2.5H6.1z"
      fill={props.color}
    />
    <Path
      d="M6.1 0h33.3c.5 0 .8.3.8.8v33.3c0 .5-.3.8-.8.8H6.1c-.5 0-.8-.3-.8-.8V.8c-.1-.5.3-.8.8-.8zm12.1 24.8l11.7-7.2c.5-.3.5-1.2-.2-1.3L18 10.1c-.5-.3-1.2 0-1.2.7v13.3c.1.7.9 1.1 1.4.7z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
