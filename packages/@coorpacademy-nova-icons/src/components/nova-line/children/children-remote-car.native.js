import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M16.998 13.998c-1.858 0-3.41 1.28-3.857 3h-2.285c-.447-1.72-1.999-3-3.857-3-2.205 0-4 1.795-4 4 0 2.206 1.795 4 4 4 1.858 0 3.41-1.279 3.857-3h2.285c.447 1.721 1.999 3 3.857 3 2.205 0 4-1.794 4-4 0-2.205-1.795-4-4-4zm-10 6a2 2 0 1 1 .001-4.001 2 2 0 0 1-.001 4.001zm10 0a2 2 0 1 1 .001-4.001 2 2 0 0 1-.001 4.001z" />
      <Path d="M20.998 6.998h-2.586l2.293-2.292-1.414-1.415-3.707 3.707h-1.586v-3a1 1 0 0 0-1-1h-5c-.379 0-.725.214-.895.553L5.38 6.998H2.998a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 .704-.29c.291-.286.904-.71 1.296-.71s1.005.425 1.293.708a.996.996 0 0 0 .707.292h6a1 1 0 0 0 .704-.29c.291-.286.904-.71 1.296-.71s1.005.425 1.293.708a.996.996 0 0 0 .707.292h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1 5h-.621c-.471-.385-1.379-1-2.379-1s-1.908.615-2.379 1H9.377c-.471-.385-1.379-1-2.379-1s-1.908.615-2.379 1h-.621v-3h2a1 1 0 0 0 .895-.552l1.724-3.448h3.382v3a1 1 0 0 0 1 1h7v3z" />
      <Circle cx={6.998} cy={17.998} r={1} />
      <Circle cx={16.998} cy={17.998} r={1} />
      <Path d="M8.998 5.998h2v3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
