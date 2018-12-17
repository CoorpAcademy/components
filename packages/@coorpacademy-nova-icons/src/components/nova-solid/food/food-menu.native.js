import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={14} cy={9} r={1} />
      <Path d="M19 2H7a2 2 0 0 0-2 2v1h2v1H3v2h2v3h2v1H3v2h2v3h2v1H3v2h2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3.293 14.293l-1.414 1.413L13 16.414l-1.293 1.292-1.414-1.413 1.599-1.599C10.764 14.059 10 12.471 10 10.5 10 7.935 11.289 6 13 6s3 1.935 3 4.5c0 1.971-.764 3.559-1.892 4.194l1.599 1.599z" />
    </G>
  </Svg>
);

export default SvgComponent;
