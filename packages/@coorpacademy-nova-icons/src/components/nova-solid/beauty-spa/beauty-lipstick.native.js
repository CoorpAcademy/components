import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M9 24h5a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2zM7 15h9v6H7zM15 3.517c0-.336-.169-.65-.449-.836a1.002 1.002 0 0 0-.945-.084l-5 2.142a1.004 1.004 0 0 0-.606.92V14h7V3.517zM12 12h-2V6.856L12 6v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
