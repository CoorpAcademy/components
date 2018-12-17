import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0L6 17.228V20H4.5v-5.25a.75.75 0 0 1 1.374-.416l.876 1.314.876-1.314A.75.75 0 0 1 9 14.75V20zm5.25-2.25c0 1.241-1.01 2.25-2.25 2.25s-2.25-1.009-2.25-2.25v-1.5C9.75 15.01 10.76 14 12 14s2.25 1.01 2.25 2.25v1.5zM18 19.94l.016.06H16.472L15 14h1.5l.739 2.927.718-2.927H19.5L18 19.94zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
