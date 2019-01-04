import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill={props.color}
      d="M21.924 8.618A1 1 0 0 0 21 8.001h-5.382l-2.724-5.447c-.339-.677-1.45-.677-1.789 0L8.382 8.001H3a1 1 0 0 0-.707 1.707l4.584 4.584-1.838 6.435a1 1 0 0 0 1.515 1.106L12 18.203l5.445 3.63a.998.998 0 0 0 1.516-1.106l-1.838-6.435 4.584-4.584c.286-.285.371-.717.217-1.09z"
    />
  </Svg>
);

export default SvgComponent;
