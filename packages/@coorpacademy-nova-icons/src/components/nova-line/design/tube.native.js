import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 2c-.819 0-8 .084-8 3v14c0 2.916 7.181 3 8 3s8-.084 8-3V5c0-2.916-7.181-3-8-3zm0 2c3.137 0 5.155.585 5.829 1-.674.416-2.692 1-5.829 1s-5.155-.584-5.829-1C6.845 4.585 8.863 4 12 4zm0 16c-3.477 0-5.58-.717-6-1.128V7.108c2.189.85 5.462.892 6 .892s3.811-.042 6-.892v11.764c-.42.411-2.523 1.128-6 1.128z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
