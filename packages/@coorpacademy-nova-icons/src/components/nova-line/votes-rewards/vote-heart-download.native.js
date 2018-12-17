import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M9 16.001a.998.998 0 0 1-.529-.152C8.124 15.633 0 10.492 0 5.001c0-2.757 2.243-5 5-5 1.594 0 3.07.837 4 2.08.93-1.243 2.406-2.08 4-2.08 2.757 0 5 2.243 5 5 0 5.491-8.124 10.632-8.471 10.848a.998.998 0 0 1-.529.152zm-4-14c-1.654 0-3 1.346-3 3 0 3.363 4.643 7.207 7 8.806 2.357-1.599 7-5.442 7-8.806 0-1.654-1.346-3-3-3-1.689 0-3 1.613-3 3a1 1 0 1 1-2 0c0-1.387-1.311-3-3-3zM22.293 17.294L20 19.587v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.415l4.707-4.707z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
