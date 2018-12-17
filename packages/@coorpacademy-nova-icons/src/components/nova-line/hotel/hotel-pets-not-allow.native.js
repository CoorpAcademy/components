import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M16.985 10.828l4.707-4.707-1.414-1.415-17.97 17.972 1.414 1.415 4.532-4.533-.249 1.244A.998.998 0 0 0 8.985 22h8a1 1 0 0 0 .995-1.1c-.026-.267-.995-9.804-.995-10.072zm-1.838 1.839L15.58 17h-4.767l4.334-4.333zM10.205 20l.2-1h5.375l.1 1h-5.675zM4.985 15h2.171l2-2H5l.012-2.137 5.142-.877a1 1 0 0 0 .472-.218l4.36-3.633.001 1.035 1.999-1.999V4a1 1 0 0 0-1.64-.768L9.552 8.06l-4.85.827A1.997 1.997 0 0 0 3 10.867V13c0 1.103.882 2 1.985 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
