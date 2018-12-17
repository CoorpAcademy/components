import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 .458c-.947-.298-1.955-.46-3-.46S7.947.16 7 .458v4.54h6V.458zM15 1.35v3.648h3.646A10.035 10.035 0 0 0 15 1.35zM19.539 6.998H15v2h4.949a9.872 9.872 0 0 0-.41-2zM13 8.998v-2H7v6h3v-2a2 2 0 0 1 2-2h1zM1.354 4.998H5V1.35a10.035 10.035 0 0 0-3.646 3.648zM10 14.998H7v4.539a9.981 9.981 0 0 0 3 .462c.121 0 .238-.014.358-.019A5.855 5.855 0 0 1 10 17.998v-3zM5 18.645v-3.647H1.354A10.047 10.047 0 0 0 5 18.645zM0 9.998c0 1.044.162 2.052.461 3H5v-6H.461a9.94 9.94 0 0 0-.461 3zM12 10.998v7c0 3.812 3.797 5.579 5.804 5.981l.196.038.196-.039C20.203 23.576 24 21.81 24 17.998v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
