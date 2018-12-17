import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.001c-5.522 0-10 4.478-10 10 0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm2.109 12.038c0-.328.265-.594.594-.594l2.369.001a.59.59 0 0 1 .591.591l.002 2.37a.597.597 0 0 1-.594.594H14.11v-.016a7.348 7.348 0 0 1-4.177-1.503l-2.726 2.726-1.414-1.414 2.726-2.726a7.352 7.352 0 0 1-1.5-4.176h-.017l-.001-2.961a.597.597 0 0 1 .594-.594l2.369.001a.593.593 0 0 1 .592.592l.001 2.371a.593.593 0 0 1-.592.592h-1.17a5.582 5.582 0 0 0 .992 2.907l6.506-6.506 1.414 1.414-6.506 6.507c.834.58 1.831.936 2.908.993v-1.169z"
    />
  </Svg>
);

export default SvgComponent;
