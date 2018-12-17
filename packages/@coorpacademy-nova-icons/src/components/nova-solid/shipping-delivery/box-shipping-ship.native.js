import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.445A1.001 1.001 0 0 0 15 0h-4v6h8.535L15.832.445zM9 0H5a1 1 0 0 0-.832.445L.465 6H9V0zM17 9c1.045 0 2.053.162 3 .459V8H0v11a1 1 0 0 0 1 1h6.051A10.007 10.007 0 0 1 7 19c0-5.523 4.477-10 10-10z" />
      <Path d="M23.851 18.475A1.001 1.001 0 0 0 23 18v-3a1 1 0 0 0-1-1h-1v-3h-2v3h-2a1 1 0 0 0-1 1v3h-1v-2h-4v2h-1a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h9c.379 0 .725-.214.895-.553l2-4c.154-.31.138-.678-.044-.972zM18 16h3v2h-3v-2zm2.382 6h-7.764l-1-2h9.764l-1 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
