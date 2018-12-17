import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 10c0-.921.183-1.799.506-2.605A7.953 7.953 0 0 0 8 5.999c-4.411 0-8 3.589-8 8s3.589 8 8 8c3.658 0 6.744-2.472 7.693-5.83A6.996 6.996 0 0 1 12 10zm-1.707 7.706L7 14.414V9h2v4.586l2.707 2.707-1.414 1.413zM19-.001c1.667 6.666-2 8.75-2 8.75V5.367c-1.707.743-3 2.535-3 4.633 0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.576 0-5.001-5-10.001z"
    />
  </Svg>
);

export default SvgComponent;
