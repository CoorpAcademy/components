import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.697 15.036c.719-1.249 3.032-2.832 5.303-4.171V5c0-.266-.106-.519-.293-.707l-2-2A1.003 1.003 0 0 0 13 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8.79a5.62 5.62 0 0 1-1.093-6.964zM12 3l3 3h-3V3z" />
      <Path d="M19.65 10.699c-1.8.857-6.463 3.092-7.483 4.863a4.076 4.076 0 0 0 .875 5.131l-1.15 2.026 1.305.74 1.146-2.018a4.068 4.068 0 0 0 4.901-1.803c1.166-2.026.671-6.766.406-8.939zm-1.707 8.192c-.558.971-1.761 1.438-2.836 1.202l1.545-2.723-1.305-.74-1.538 2.711a2.569 2.569 0 0 1-.599-1.068 2.567 2.567 0 0 1 .256-1.961c.496-.861 2.982-2.336 4.925-3.334.162 2.071.157 4.863-.448 5.913z" />
    </G>
  </Svg>
);

export default SvgComponent;
