import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 20.277V14h-1.999v6.277a1.984 1.984 0 0 0-.724.723H11v-5.277c.595-.347 1-.985 1-1.723 0-.737-.405-1.376-1-1.723V5H3.723A1.994 1.994 0 1 0 1 7.723v12.554c-.595.347-1 .986-1 1.723a1.994 1.994 0 1 0 3.723 1h12.555c.347.595.984 1 1.723 1a2 2 0 0 0 2-2A1.998 1.998 0 0 0 19 20.277zM9 21H3.723A2.012 2.012 0 0 0 3 20.277V15h5.277c.175.3.423.548.723.723V21zm0-8.723c-.3.176-.548.423-.723.723H3V7.723c.3-.175.548-.423.723-.723H9v5.277z" />
      <Path d="M12 0v7c0 3.813 3.796 5.579 5.804 5.98l.196.04.196-.039C20.204 12.579 24 10.813 24 7V0H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.175 10.757 14 9.749 14 7V2h8v5z" />
      <Path d="M17 9h2V7h2V5h-2V3h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
