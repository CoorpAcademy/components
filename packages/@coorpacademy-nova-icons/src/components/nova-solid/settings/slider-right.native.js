import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.578 10C19.806 8.235 18.049 7 16 7s-3.806 1.235-4.578 3H0v4h11.422c.772 1.766 2.529 3 4.578 3s3.806-1.234 4.578-3H24v-4h-3.422zM16 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
    />
  </Svg>
);

export default SvgComponent;
