import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 10h4v4H4zM10 16h4v4h-4zM4 16h4v4H4z" />
      <Path d="M16 11.971V22H2V8h8.269a6.958 6.958 0 0 1-.604-2H0v18h18V11.857c-.456.094-.93.143-1.414.143-.198 0-.392-.014-.586-.029z" />
      <Path d="M14 11.501A6.987 6.987 0 0 1 11.691 10H10v4h4v-2.499zM20.753 7.753c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833l3.247 3.247L24 11l-3.247-3.247zM16.586 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
