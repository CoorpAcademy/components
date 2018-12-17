import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 20.271V15h-1.999v5.271a1.992 1.992 0 0 0-.724.723H11v-5.277c.595-.347 1-.984 1-1.723 0-.738-.405-1.375-1-1.723V6.994h1v-2H3.723c-.347-.595-.984-1-1.723-1a1.994 1.994 0 1 0-1 3.723v12.555c-.595.348-1 .985-1 1.723a2 2 0 0 0 2 2c.738 0 1.376-.404 1.723-1h12.555c.347.596.984 1 1.723 1a2 2 0 0 0 2-2A1.999 1.999 0 0 0 19 20.271zm-10 .723H3.723A2.004 2.004 0 0 0 3 20.271v-5.277h5.277c.175.3.423.548.723.723v5.277zm0-8.723c-.3.175-.548.423-.723.723H3V7.717c.3-.175.548-.423.723-.723H9v5.277z" />
      <Path d="M23 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6V6h6v5z" />
      <Circle cx={19} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
