import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.478 2 2 6.478 2 12s4.477 10 10 10c5.521 0 10-4.478 10-10S17.522 2 12 2zm5.071 15.664H14.11v-.016a7.4 7.4 0 0 1-7.092-7.093h-.016l-.001-2.961A.596.596 0 0 1 7.594 7l2.369.001a.593.593 0 0 1 .592.592l.001 2.371a.593.593 0 0 1-.592.592H8.795a5.623 5.623 0 0 0 5.315 5.315l-.001-1.169c0-.328.265-.594.594-.594l2.369.001a.59.59 0 0 1 .591.591l.002 2.37a.597.597 0 0 1-.594.594z"
    />
  </Svg>
);

export default SvgComponent;
