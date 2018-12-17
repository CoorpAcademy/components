import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 13h-8V5a1.002 1.002 0 0 0-1.124-.992C5.386 4.569 2 8.435 2 13c0 4.962 4.037 9 9 9 4.566 0 8.432-3.386 8.992-7.876A1 1 0 0 0 19 13zm-8 7c-3.859 0-7-3.14-7-7 0-3.166 2.082-5.898 5-6.771V14a1 1 0 0 0 1 1h7.771c-.873 2.917-3.605 5-6.771 5z" />
      <Path d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1c0-4.962-4.037-9-9-9zm1 8V4.071A7.016 7.016 0 0 1 19.929 10H14z" />
    </G>
  </Svg>
);

export default SvgComponent;
