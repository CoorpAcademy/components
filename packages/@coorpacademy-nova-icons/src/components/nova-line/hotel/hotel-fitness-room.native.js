import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={7} cy={15} r={2} />
      <Path d="M21.051.684l-.544 1.632a.997.997 0 0 1-.948.684H15v2h2.802l-1.524 8.386-5.562-2.29L9.478 8H12V6H5v2h2.323l.85 2.125a5.066 5.066 0 0 0-3.95.701A5.001 5.001 0 0 0 2 14.989 5.017 5.017 0 0 0 7.011 20h11.192A2.8 2.8 0 0 0 21 17.203a2.79 2.79 0 0 0-1.731-2.586l-1.1-.453 1.67-9.187a2.99 2.99 0 0 0 2.566-2.028l.544-1.633-1.898-.632zM19 17.203c0 .44-.357.797-.797.797H7.011A3.014 3.014 0 0 1 4 14.989a3.01 3.01 0 0 1 4.157-2.784l10.35 4.262a.794.794 0 0 1 .493.736zM2 21h20v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
