import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M16 4.001c-1.594 0-3.07.837-4 2.08-.93-1.243-2.406-2.08-4-2.08-2.757 0-5 2.243-5 5 0 5.491 8.124 10.632 8.471 10.848a.992.992 0 0 0 1.058 0C12.876 19.633 21 14.492 21 9.001c0-2.757-2.243-5-5-5zm-11 5c0-1.654 1.346-3 3-3 1.541 0 2.754 1.34 2.958 2.628l-2.646 2.646 4 2L11 14.587v2.503c-2.467-1.857-6-5.155-6-8.089zm8 8.089v-1.675l2.688-2.688-4-2L13 9.415v-.414c0-1.388 1.311-3 3-3 1.654 0 3 1.346 3 3 0 2.934-3.533 6.232-6 8.089z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
