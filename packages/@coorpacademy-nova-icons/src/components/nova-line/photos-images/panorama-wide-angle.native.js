import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21.949 5.683l-.179-.538-.553-.122a42.214 42.214 0 0 0-18.434 0l-.553.122-.179.537c-1.397 4.191-1.397 8.441 0 12.633l.179.537.553.123c3.057.678 6.158 1.023 9.217 1.023s6.16-.344 9.217-1.023l.553-.123.179-.537c1.396-4.192 1.396-8.442 0-12.632zm-1.727 11.46a40.138 40.138 0 0 1-16.445 0c-1.029-3.417-1.029-6.873 0-10.289a40.138 40.138 0 0 1 16.445 0c1.029 3.416 1.029 6.872 0 10.289z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
