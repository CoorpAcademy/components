import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M11.369 3.426l2.773.566-.146-.492c-.305-1.025-1.459-1.65-2.487-1.344L3.842 4.442c-.51.152-.932.496-1.186.966a1.977 1.977 0 0 0-.159 1.522l3.429 11.5c.058.193.15.367.259.529.022-.324 2.76-13.652 2.824-13.973a2.007 2.007 0 0 1 2.36-1.56z" />
      <Path d="M21.255 7.062a1.994 1.994 0 0 0-1.268-.857l-7.838-1.6c-1.066-.223-2.145.5-2.361 1.558L7.39 17.922a1.985 1.985 0 0 0 .291 1.502c.295.447.746.75 1.267.857.326.068 7.906 1.641 8.238 1.641a2.01 2.01 0 0 0 1.961-1.6l2.399-11.758a1.982 1.982 0 0 0-.291-1.502zm-7.386 9.122l-1.36-3.34 2.561-2.539 1.359 3.34-2.56 2.539z" />
    </G>
  </Svg>
);

export default SvgComponent;
