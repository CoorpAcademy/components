import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M14.403 5.352A5.47 5.47 0 0 0 13 9.012v4c0 2-2 2-2 2s-2 0-2-2h2v-2H9v-1h2v-2H9v-1h2v-2H9c0-1.66-1.34-3-3-3H4l-3 3h5v8.5c0 3.5 3 7.491 7.731 7.491C18 21.012 21 17.012 21 13.512v-1.5l-6.597-6.66zM14 18.965v-2a3.49 3.49 0 0 0 2.949-2.953h2.025c-.238 2.632-2.344 4.712-4.974 4.953z"
    />
  </Svg>
);

export default SvgComponent;
