import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9.25c-2.619 0-4.75 2.131-4.75 4.75s2.131 4.75 4.75 4.75 4.75-2.131 4.75-4.75S14.619 9.25 12 9.25zm0 1.5c.624 0 1.202.186 1.698.492l-4.456 4.456A3.222 3.222 0 0 1 8.75 14 3.254 3.254 0 0 1 12 10.75zm0 6.5a3.222 3.222 0 0 1-1.698-.492l4.456-4.456c.306.496.492 1.073.492 1.697A3.254 3.254 0 0 1 12 17.25z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
