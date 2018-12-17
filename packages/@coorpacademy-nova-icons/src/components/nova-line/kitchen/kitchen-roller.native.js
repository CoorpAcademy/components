import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001V24H-.002z" />
    <Path
      d="M19.414 6l2.293-2.293-1.414-1.414L18 4.586 17.414 4c-.754-.754-2.074-.754-2.828 0L4 14.586c-.377.377-.584.879-.584 1.414s.207 1.037.584 1.414l.586.586-2.293 2.293 1.414 1.414L6 19.414l.586.586c.377.377.879.584 1.414.584s1.037-.207 1.414-.584L20 9.414c.377-.377.584-.879.584-1.414S20.377 6.963 20 6.586L19.414 6zM8.003 18.584H8v.002L5.414 16 16 5.414 18.586 8 8.003 18.584z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
