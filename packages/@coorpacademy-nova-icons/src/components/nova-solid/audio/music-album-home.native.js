import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 18.502a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l4.087-1.333a8.978 8.978 0 0 1-1.874-3.78H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.058a8.957 8.957 0 0 1-4-1.459v4.017zM17.707.295a1 1 0 0 0-1.414 0l-6 6 1.414 1.415L13 6.417v4.586a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.417l1.293 1.293 1.414-1.415-6-6zM18 10.002h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
