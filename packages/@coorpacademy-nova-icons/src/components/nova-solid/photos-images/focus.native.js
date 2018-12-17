import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 4.001H3c-1.1 0-2 .901-2 2v12c0 1.099.9 2 2 2h18c1.1 0 2-.901 2-2v-12c0-1.1-.9-2-2-2zM7.799 16.285l-1.4 1.428A7.943 7.943 0 0 1 4 12c0-2.169.853-4.198 2.402-5.714l1.399 1.43A5.95 5.95 0 0 0 6 12a5.96 5.96 0 0 0 1.799 4.285zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.598 2.716l-1.399-1.43A5.953 5.953 0 0 0 18 12c0-1.624-.64-3.147-1.801-4.286l1.4-1.427A7.944 7.944 0 0 1 20 12c0 2.17-.853 4.199-2.402 5.716z"
    />
  </Svg>
);

export default SvgComponent;
