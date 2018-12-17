import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21.691 11.57A9.973 9.973 0 0 0 13 4.055V2h-2v2.055a9.973 9.973 0 0 0-8.691 7.515c-.093.372.035.766.331 1.011s.705.3 1.055.142c2.354-1.073 5.102-.903 7.302.367v6.41c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5V19h-2v.5a.5.5 0 0 1-1 0v-6.405c2.201-1.274 4.954-1.447 7.31-.372a1.001 1.001 0 0 0 1.384-1.153zM12 11.34a9.954 9.954 0 0 0-7.04-1.128C6.327 7.661 9.001 6 12 6s5.673 1.661 7.04 4.212A10.05 10.05 0 0 0 12 11.34z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
