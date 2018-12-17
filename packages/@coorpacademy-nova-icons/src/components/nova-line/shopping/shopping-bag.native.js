import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M19.996 8.917A.999.999 0 0 0 19 8h-2V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H5a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 4 22h16a1 1 0 0 0 .996-1.083l-1-12zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zM5.087 20l.833-10H7v3h2v-3h6v3h2v-3h1.08l.833 10H5.087z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
