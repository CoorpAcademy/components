import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 8v1h2V6h-3V2.071c3.312.423 6.098 2.907 6.818 6.224l1.954-.425C18.783 3.31 14.673 0 10 0 4.486 0 0 4.486 0 10a9.96 9.96 0 0 0 7.695 9.733l.459-1.947A7.966 7.966 0 0 1 2 10c0-2.021.759-3.864 2-5.274V10h2.279l.813 2.442 1.897-.633L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3zM18 13h-2v5h4v-2h-2z" />
      <Path d="M17 10c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
