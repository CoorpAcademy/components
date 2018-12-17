import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.759 19.807l-1.566-7.046C19.974 11.774 19.011 11 18 11h-1v2h1c.081 0 .223.115.241.194L19.753 20H4.247l1.513-6.806c.017-.079.159-.194.24-.194h1v-2H6c-1.011 0-1.974.774-2.193 1.761l-1.566 7.046c-.123.554 0 1.112.337 1.532S3.433 22 4 22h16c.567 0 1.085-.241 1.422-.661s.46-.979.337-1.532z" />
      <Path d="M12 4a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 10z" />
    </G>
  </Svg>
);

export default SvgComponent;
