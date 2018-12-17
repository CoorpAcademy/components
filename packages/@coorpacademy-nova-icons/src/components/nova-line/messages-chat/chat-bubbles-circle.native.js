import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M23.998 23H15.63c-3.584 0-6.5-2.691-6.5-6s2.916-6 6.5-6 6.5 2.691 6.5 6c0 .822-.185 1.638-.539 2.389L23.998 23zM15.63 13c-2.481 0-4.5 1.795-4.5 4s2.019 4 4.5 4h4.632l-1.024-1.537.338-.546A3.595 3.595 0 0 0 20.13 17c0-2.205-2.019-4-4.5-4z"
      fill="currentColor"
    />
    <Path
      d="M7.13 18H.716l3.775-3.774C3.598 12.959 3.13 11.515 3.13 10c0-4.411 4.038-8 9-8 4.468 0 8.3 2.961 8.914 6.889l-1.976.309C18.605 6.234 15.622 4 12.13 4c-3.86 0-7 2.691-7 6 0 1.32.5 2.578 1.444 3.636l.63.705L5.544 16H7.13v2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
