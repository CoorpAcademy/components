import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 18.001h-2v2h-2l3 3 3-3h-2zM19 7.001h2v-2h2l-3-3-3 3h2zM14 11.001H7v-3l-6 3v6h6l2-4h5z" />
      <Path d="M13.936 5.666l-1.864 1.865c.143-.016.285-.03.429-.03 2.481 0 4.5 2.018 4.5 4.5 0 2.481-2.019 4.5-4.5 4.5-.144 0-.286-.014-.429-.029l1.864 1.864C16.83 17.68 19 15.091 19 12.001s-2.17-5.678-5.064-6.335z" />
    </G>
  </Svg>
);

export default SvgComponent;
