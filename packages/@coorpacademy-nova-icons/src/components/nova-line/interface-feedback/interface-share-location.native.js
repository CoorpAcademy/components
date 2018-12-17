import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Circle cx={17} cy={7} r={2} fill="currentColor" />
    <Path
      d="M13.593 12C12.679 10.063 12 8.214 12 7c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.844-1.558 5.145-3.143 8h2.29C22.613 12.25 24 9.094 24 7c0-3.859-3.141-7-7-7s-7 3.141-7 7c0 1.354.584 3.154 1.391 5h2.202zM20.895 17.552A1 1 0 0 0 20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1.002 1.002 0 0 0-1.211-.502l-4.757 1.586A.996.996 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4c.227-.304.264-.709.095-1.048zM2 22v-6h2v6H2zm14.5-1H6v-4.28l4.494-1.497.289.579-1.49 1.491A.99.99 0 0 0 9.01 18H9v1h9l-1.5 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
