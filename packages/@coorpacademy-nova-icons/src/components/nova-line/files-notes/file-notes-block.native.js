import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 10.25c-2.619 0-4.75 2.131-4.75 4.75s2.131 4.75 4.75 4.75 4.75-2.131 4.75-4.75-2.131-4.75-4.75-4.75zM8.75 15A3.254 3.254 0 0 1 12 11.75c.624 0 1.202.186 1.698.492l-4.456 4.456A3.222 3.222 0 0 1 8.75 15zM12 18.25a3.23 3.23 0 0 1-1.698-.491l4.456-4.456c.306.496.492 1.073.492 1.697A3.254 3.254 0 0 1 12 18.25z" />
      <Path d="M19 2h-2V1a1 1 0 0 0-2 0v1h-2V1a1 1 0 0 0-2 0v1H9V1a1 1 0 0 0-2 0v1H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM5 22V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2v1a1 1 0 1 0 2 0V4h2l.001 18H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
