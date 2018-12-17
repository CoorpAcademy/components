import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.418 12.269c.353-.506.582-1.097.582-1.769 0-1.25-.65-2.498-2.031-3.108C19.656 3.265 16.205 0 12 0S4.344 3.265 4.031 7.392C2.65 8.002 2 9.25 2 10.5c0 .67.228 1.259.579 1.765A2.97 2.97 0 0 0 2 14c0 .771.301 1.469.78 2A2.98 2.98 0 0 0 2 18c0 1.302.838 2.402 2 2.815V22c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-1.185A2.993 2.993 0 0 0 22 18a2.98 2.98 0 0 0-.78-2c.479-.531.78-1.229.78-2 0-.632-.223-1.229-.582-1.731zM20 14c0 .551-.449 1-1 1H5c-.551 0-1-.449-1-1 0-.162.041-.314.111-.454A4.396 4.396 0 0 0 6 14c.754 0 1.469-.239 2.059-.674A5.094 5.094 0 0 0 10.5 14c.523 0 1.031-.117 1.5-.344.469.227.977.344 1.5.344.745 0 1.695-.232 2.441-.674.59.435 1.305.674 2.059.674.643 0 1.295-.168 1.887-.454.071.14.113.292.113.454zM12 2a6.009 6.009 0 0 1 5.916 5H6.084A6.009 6.009 0 0 1 12 2zM6 9h12c1.271 0 2 .547 2 1.5 0 .845-1.075 1.5-2 1.5-.473 0-.908-.223-1.198-.611a.999.999 0 0 0-1.604 0C15 11.656 14.141 12 13.5 12c-.402 0-.711-.168-.897-.31a.998.998 0 0 0-1.205 0c-.187.142-.496.31-.898.31-.641 0-1.5-.344-1.698-.611-.377-.506-1.227-.506-1.604 0-.29.388-.725.611-1.198.611-.925 0-2-.655-2-1.5C4 9.547 4.729 9 6 9zm0 13v-1h12v1H6zm13-3H5c-.551 0-1-.449-1-1 0-.551.449-1 1-1h8.586l1.707 1.707a.997.997 0 0 0 1.414 0L18.414 17H19c.551 0 1 .449 1 1 0 .551-.449 1-1 1z" />
      <Circle cx={9.25} cy={5.25} r={0.75} />
      <Circle cx={14.75} cy={5.25} r={0.75} />
      <Circle cx={12} cy={3.75} r={0.75} />
    </G>
  </Svg>
);

export default SvgComponent;
