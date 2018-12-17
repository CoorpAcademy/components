import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 17v1H4V6h8v1h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-2z" />
      <Path d="M15 11.162l4.23-2.115C19.154 9.027 19.082 9 19 9h-8c-.082 0-.154.027-.231.047L15 11.162z" />
      <Path d="M15.336 12.671a.747.747 0 0 1-.672 0L10 10.339V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.661l-4.664 2.332z" />
    </G>
  </Svg>
);

export default SvgComponent;
