import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M11 9.057V2.523L6.686 5.975zM13 2.523v6.534l4.315-3.082zM6 17.003c0 .304.139.591.375.781l4.625 3.7v-9.969L6 7.943v9.06zM13 21.483l4.625-3.7a1 1 0 0 0 .375-.78v-9.06l-5 3.572v9.968zM19 11.003h3v2h-3zM20.293 2.295l1.414 1.415-2 2-1.413-1.415zM20.293 21.71l-2-2 1.414-1.414 2 2zM2 11.003h3v2H2zM4.293 5.71l-2-2 1.414-1.414 2 2zM3.707 21.71l-1.415-1.415 2-2 1.414 1.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
