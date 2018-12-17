import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <Path
      fill="currentColor"
      d="M21.406 5.086l-9-4a1 1 0 0 0-.892.04l-9 5A1.001 1.001 0 0 0 2 7c0 .694.114 17 10 17S22 6.734 22 6c0-.394-.233-.754-.594-.914zM17 13.201V16a1 1 0 1 1-2 0v-1h-5v1a1 1 0 1 1-2 0v-1.801c0-.884-.717-1.601-1.601-1.601-.612 0-1.694-.976-1.194-1.497C5.849 10.429 6.399 9 8 9c.899 0 1.657.536 2.009 1h3.789c.445 0 .868.092 1.253.256C14.859 9.542 15.395 9 16 9a1 1 0 0 1 1 1 .99.99 0 0 1-.902.981c.556.576.902 1.357.902 2.22z"
    />
  </Svg>
);

export default SvgComponent;
