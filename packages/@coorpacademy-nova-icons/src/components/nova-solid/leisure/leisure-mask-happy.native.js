import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M21.527 2.15a1 1 0 0 0-.973-.044C20.516 2.124 16.688 4 12 4S3.485 2.124 3.447 2.106A1.001 1.001 0 0 0 2 3v10c0 5.656 9.289 8.816 9.684 8.949.104.033.209.051.316.051s.213-.018.316-.051C12.711 21.816 22 18.656 22 13V3a1 1 0 0 0-.473-.85zM8 8c1.467 0 2 1.195 2 2H6c.001-.805.534-2 2-2zm4 10a5.007 5.007 0 0 1-4.898-4h2.083A2.994 2.994 0 0 0 12 16a2.996 2.996 0 0 0 2.816-2h2.082A5.006 5.006 0 0 1 12 18zm2-8c0-.805.533-2 2-2s2 1.195 2 2h-4z"
    />
  </Svg>
);

export default SvgComponent;
