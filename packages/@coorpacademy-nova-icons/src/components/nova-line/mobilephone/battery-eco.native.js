import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 8.969h-2v-2a1 1 0 0 0-1-1h-2v2h1v2a1 1 0 0 0 1 1h2v2h-2a1 1 0 0 0-1 1v2h-2v2h3a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM4 7.969h4v-2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H4v-8z" />
      <Path d="M14.055 5.727l-.898.527c-.879.515-5.305 3.174-6.139 4.963a4.084 4.084 0 0 0 1.327 5.041l-.983 2.108L8.721 19l.986-2.113c.329.086.665.141 1.009.141a4.1 4.1 0 0 0 3.703-2.359c1.016-2.177-.027-7.34-.149-7.922l-.215-1.02zm-5.678 6.124c.417-.896 2.742-2.563 4.586-3.724l-3.337 7.158a2.587 2.587 0 0 1-1.249-3.434z" />
    </G>
  </Svg>
);

export default SvgComponent;
