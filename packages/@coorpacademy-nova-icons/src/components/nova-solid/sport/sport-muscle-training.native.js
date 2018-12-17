import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M22.875 12.387c-.554-2.422-3.185-3.889-5.877-3.273-1.784.407-3.129 1.632-3.684 3.114A7.298 7.298 0 0 0 11.5 12c-1.412 0-2.696.391-3.67 1.027L6 9h.646a2 2 0 0 0 1.857-1.257l.4-1A2.001 2.001 0 0 0 7.046 4H4a2 2 0 0 0-2 2v9a5 5 0 0 0 5 5h4l-.008-.018c2.034.134 4.273-.566 5.398-2.155a5.374 5.374 0 0 0 2.613.06c2.69-.615 4.425-3.076 3.872-5.5zM5 6h2v1H5V6z"
    />
  </Svg>
);

export default SvgComponent;
