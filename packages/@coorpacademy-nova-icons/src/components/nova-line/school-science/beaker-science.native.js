import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21.411 19.218L16 12.642V6h1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v6.642l-5.458 6.639a2.99 2.99 0 0 0-.203 3.105A2.989 2.989 0 0 0 5 24h14a2.989 2.989 0 0 0 2.661-1.614c.518-.996.441-2.186-.25-3.168zM8 3h8v1H8V3zm1.772 10.636c.147-.179.228-.404.228-.636V6h4v1h-2v2h2v1h-3v2h3v1c0 .232.081.457.228.636L16.175 16H7.826l1.946-2.364zm10.115 7.826A.996.996 0 0 1 19 22H5a.997.997 0 0 1-.887-.537c-.173-.333-.147-.729.02-.975L6.181 18h11.641l1.998 2.427c.214.307.24.703.067 1.035z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
