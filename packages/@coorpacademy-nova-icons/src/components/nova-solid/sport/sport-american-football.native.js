import React from "react";
import Svg, { Path, G, Ellipse } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M4 2h2v8H4zM22 14V2h-2v10h-9v2h1v6h-1v2h4v-2h-1v-6z" />
      <Ellipse
        transform="rotate(36.002 11.607 7.367)"
        cx={11.607}
        cy={7.368}
        rx={2}
        ry={3}
      />
      <Path d="M5.293 17.64l-1.618-1.176 1.664-2.289 1.618 1.176zM2.426 21.587L.808 20.412l1.663-2.289 1.618 1.176zM8.204 13.635l-1.618-1.176 1.662-2.288 1.618 1.176z" />
    </G>
  </Svg>
);

export default SvgComponent;
