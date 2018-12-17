import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M22.707 4.236l-1.414-1.413-18.471 18.47 1.414 1.413 2.793-2.792A6.963 6.963 0 0 0 12 22a7 7 0 0 0 7-7c0-1.601-.719-3.507-1.695-5.36l5.402-5.404zM12 20a4.945 4.945 0 0 1-3.55-1.507l3.55-3.55V20zM7.056 14.231C7.604 10.275 12 5 12 5v4.286l3.159-3.158C13.53 3.757 12 2 12 2s-7 8-7 13c0 .403.042.795.107 1.18l1.949-1.949z" />
    </G>
  </Svg>
);

export default SvgComponent;
