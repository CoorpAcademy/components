import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M11 9a3 3 0 0 0 3-3c0-.568-.168-1.094-.441-1.547.54-.481 1.512-.905 3.199-.482l.484-1.941c-2.581-.645-4.267.154-5.242 1.154A2.966 2.966 0 0 0 11 3a3 3 0 0 0 0 6z" />
      <Path d="M14.708 7.486A3.995 3.995 0 0 1 7 6c0-.218.031-.429.064-.638-2.653 1.869-3.72 4.676-3.99 6.638H20.35l-5.642-4.514zM19.999 13h-16c-.552 0-1 .448-.999 1v3h17.999v-3a1 1 0 0 0-1-1zM3 21a.999.999 0 0 0 .999 1h16a1 1 0 0 0 1-1v-3H3v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
