import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M15 2H5v2h3v1H6c-1.103 0-2 .898-2 2v8a5.008 5.008 0 0 0 4 4.899V22h2v-2.101A5.008 5.008 0 0 0 14 15V7c0-1.102-.896-2-2-2h-2V4h5c1.654 0 3 1.346 3 3v15h2V7c0-2.757-2.243-5-5-5zm-3 13H8v-1h4v1zm0-3H8v-1h4v1zm0-4v1H8V8h4z"
    />
  </Svg>
);

export default SvgComponent;
