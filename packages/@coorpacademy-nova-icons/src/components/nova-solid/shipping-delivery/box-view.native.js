import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M9 .001H5a1 1 0 0 0-.832.445L.465 6.001H9v-6zM15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM16 8.998c1.488 0 2.865.468 4 1.26V8.001H0v11a1 1 0 0 0 1 1h9.262A6.961 6.961 0 0 1 9 15.998a7 7 0 0 1 7-7z" />
      <Path d="M20.167 18.751c.524-.79.833-1.735.833-2.753 0-2.756-2.243-5-5-5s-5 2.244-5 5c0 2.757 2.243 5 5 5a4.956 4.956 0 0 0 2.753-.833L22 23.412l1.414-1.414-3.247-3.247zM16 18.998c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
