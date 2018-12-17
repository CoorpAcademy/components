import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.998 21.994H3.291l1.328-1.43a1 1 0 0 0 .021-1.338c-1.074-1.232-1.642-2.695-1.642-4.232 0-3.255 2.555-5.989 6-6.77V6.176c-4.559.836-8 4.473-8 8.818 0 1.735.541 3.391 1.573 4.836L.265 22.314a1 1 0 0 0 .733 1.68h10c5.514 0 10-4.037 10-9h-2c0 3.86-3.589 7-8 7z" />
      <Path d="M23.412 11l-3.247-3.247c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.966 4.966 0 0 0 2.753-.833l3.247 3.247L23.412 11zM12.998 5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
