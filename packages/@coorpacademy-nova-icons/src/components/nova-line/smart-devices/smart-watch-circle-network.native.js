import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={9.001} r={1} />
      <Circle cx={9.5} cy={9.501} r={0.75} />
      <Circle cx={14.5} cy={9.501} r={0.75} />
      <Circle cx={14.5} cy={14.501} r={0.75} />
      <Circle cx={9.5} cy={14.501} r={0.75} />
      <Circle cx={15} cy={12.001} r={1} />
      <Circle cx={12} cy={12.001} r={1} />
      <Circle cx={9} cy={12.001} r={1} />
      <Circle cx={12} cy={15.001} r={1} />
      <Path d="M17.537 6.242L15.754.003H8.246L6.463 6.242a7.97 7.97 0 0 0 0 11.522l1.783 6.239h7.509l1.783-6.239a7.97 7.97 0 0 0-.001-11.522zM9.754 2.003h4.491l.738 2.583a7.936 7.936 0 0 0-5.967 0l.738-2.583zm4.492 20H9.754l-.738-2.583a7.945 7.945 0 0 0 5.968 0l-.738 2.583zm-2.247-4.002a6 6 0 0 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
