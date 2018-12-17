import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.768 16.336L19.167 12l2.691-4.485A1 1 0 0 0 21 6h-5.434l-2.709-4.514c-.361-.603-1.354-.603-1.715 0L8.434 6H3a1 1 0 0 0-.857 1.515L4.834 12l-2.691 4.486A.997.997 0 0 0 3 18h5.434l2.708 4.515a1.001 1.001 0 0 0 1.715 0L15.566 18h5.454a1 1 0 0 0 .748-1.664zM19.234 8L18 10.056 16.767 8h2.467zm-2.4 4l-2.4 4H9.566l-2.4-4 2.4-4h4.868l2.4 4zM12 3.944L13.233 6h-2.467L12 3.944zM4.766 8h2.468L6 10.057 4.766 8zm0 8L6 13.943 7.234 16H4.766zM12 20.056L10.767 18h2.467L12 20.056zM16.767 16L18 13.943 19.234 16h-2.467z"
    />
  </Svg>
);

export default SvgComponent;
