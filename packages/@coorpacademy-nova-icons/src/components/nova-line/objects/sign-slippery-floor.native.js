import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18.994 2.89A1 1 0 0 0 18 2H6a1 1 0 0 0-.994.89l-2 18A.998.998 0 0 0 4 22h5a1 1 0 0 0 .949-.684L10.721 19h2.559l.771 2.316A1 1 0 0 0 15 22h5a.997.997 0 0 0 .994-1.11l-2-18zM15.721 20l-.771-2.316A1.001 1.001 0 0 0 14 17h-4a1 1 0 0 0-.949.684L8.279 20H5.117L6.895 4h10.211l1.777 16h-3.162z" />
      <Path d="M12 8c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 2c.277 0 .541.057.781.159l-2.622 2.622A2.002 2.002 0 0 1 12 10zm0 4c-.277 0-.541-.057-.781-.159l2.623-2.622A2.001 2.001 0 0 1 12 14zM10 5h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
