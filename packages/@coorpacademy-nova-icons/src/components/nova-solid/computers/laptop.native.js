import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM23.632 19.734l-1.684-5.051a.992.992 0 0 0-.949-.672V14H3v.012a.993.993 0 0 0-.949.672L.367 19.736c-.186.558-.11 1.13.208 1.571.319.44.838.693 1.425.693h20c.587 0 1.106-.253 1.424-.693.318-.442.394-1.014.208-1.573zM14 19h-4v-2h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
