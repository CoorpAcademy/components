import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.993 10.137c.001-.047.007-.092.007-.139a9.95 9.95 0 0 0-.461-3H15v3.76a8.455 8.455 0 0 1 3.5-.76c.511 0 1.008.052 1.493.139zM15 1.35v3.648h3.647A10.037 10.037 0 0 0 15 1.35zM13 12.023V6.998H7v6h5.026c.298-.352.623-.678.974-.975zM13 .458c-.947-.298-1.955-.46-3-.46S7.948.16 7 .458v4.54h6V.458zM7 14.998v4.539a9.986 9.986 0 0 0 3 .462c.047 0 .093-.007.14-.007a8.48 8.48 0 0 1-.14-1.494c0-1.25.276-2.432.761-3.5H7zM5 18.645v-3.647H1.354A10.055 10.055 0 0 0 5 18.645zM1.354 4.998H5V1.35a10.042 10.042 0 0 0-3.646 3.648zM0 9.998a9.99 9.99 0 0 0 .461 3H5v-6H.461a9.97 9.97 0 0 0-.461 3zM21.5 18.998c-.812 0-1.529.396-1.986.997l-2.562-1.024c.029-.155.048-.312.048-.473 0-.163-.019-.32-.048-.474l2.562-1.025a2.49 2.49 0 0 0 1.986.999c1.379 0 2.5-1.122 2.5-2.5 0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5c0 .03.008.058.009.088l-2.78 1.113a2.482 2.482 0 0 0-1.729-.701 2.502 2.502 0 0 0-2.5 2.5c0 1.378 1.121 2.5 2.5 2.5.672 0 1.279-.269 1.729-.702l2.78 1.112c-.001.03-.009.059-.009.09 0 1.378 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5c0-1.379-1.121-2.5-2.5-2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
