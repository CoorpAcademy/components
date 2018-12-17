import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3H2C.897 3 0 3.898 0 5v14c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2zm-9 9c0 .342-.035.677-.101 1H12v1.969l-.025.031H10v1.577A4.966 4.966 0 0 1 8 17v-2H6v1.577A5.028 5.028 0 0 1 4.025 15H6v-2H4v1.969A4.953 4.953 0 0 1 3.101 13H4v-2h-.899c.149-.73.469-1.392.899-1.969V11h2V9H4.025A5.016 5.016 0 0 1 6 7.424V9h2V7a4.95 4.95 0 0 1 2 .424V9h1.975c.007.011.017.02.025.031V11h.899c.066.323.101.658.101 1zm2 6a5.92 5.92 0 0 1-2.563-.591 6.988 6.988 0 0 0 0-10.818A5.92 5.92 0 0 1 15 6a6 6 0 0 1 0 12z" />
      <Path d="M8 9h2v2H8zM6 11h2v2H6zM10 11h2v2h-2zM8 13h2v2H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
