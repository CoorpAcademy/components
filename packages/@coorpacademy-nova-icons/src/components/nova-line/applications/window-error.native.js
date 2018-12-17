import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Path d="M19.2 10.799a.801.801 0 0 0-1.465-.444l-3.2 4.8a.8.8 0 0 0 .666 1.243h2.4V18h1.6v-1.6H20v-1.601h-.8v-4zm-1.6 4h-.905l.905-1.357v1.357z" />
      <Path d="M12 10a2.404 2.404 0 0 0-2.4 2.4v2.399h-.8v-4a.801.801 0 0 0-1.465-.444l-3.2 4.8A.8.8 0 0 0 4.8 16.4h2.4V18h1.6v-1.6h.8v-.8c0 1.323 1.077 2.4 2.4 2.4s2.4-1.076 2.4-2.399v-3.2A2.403 2.403 0 0 0 12 10zm-4.8 4.799h-.905l.905-1.357v1.357zm5.6.801a.801.801 0 0 1-1.6 0v-3.2a.801.801 0 0 1 1.6 0v3.2z" />
    </G>
  </Svg>
);

export default SvgComponent;
