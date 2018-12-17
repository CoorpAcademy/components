import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24H0z" />
    <Path
      d="M22 14v-2h-2v-2h-2v2.586l-1.772 1.772a5.003 5.003 0 0 0-1.435-1.502A3.985 3.985 0 0 0 16 10c0-.731-.212-1.409-.557-2H17V6h-2V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H7v2h1.557A3.953 3.953 0 0 0 8 10c0 1.119.464 2.129 1.207 2.856a5.027 5.027 0 0 0-1.435 1.502L6 12.586V10H4v2H2v2h2.586l2.468 2.469C7.035 16.645 7 16.818 7 17c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.182-.035-.355-.054-.531L19.414 14H22zM11 4h2v2h-2V4zm-1 6a2 2 0 1 1 4.001.001A2 2 0 0 1 10 10zm2 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
