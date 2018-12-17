import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12.578 10C11.806 8.235 10.049 7 8 7s-3.806 1.235-4.578 3H0v4h3.422c.772 1.765 2.529 3 4.578 3s3.806-1.234 4.578-3H24v-4H12.578zM8 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
    />
  </Svg>
);

export default SvgComponent;
