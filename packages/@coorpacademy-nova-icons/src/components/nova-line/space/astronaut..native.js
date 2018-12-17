import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.489 9.771l-3.655-1.236C18.114 7.867 19 6.541 19 5c0-2.205-1.794-4-4-4s-4 1.795-4 4c0 1.575.921 2.925 2.246 3.577A2.993 2.993 0 0 0 12 11v4.303l2 3V24h5c1.103 0 2-.896 2-2v-1c0-1.104-.897-2-2-2v-2.303l-1-1.5v-.623c.473.166 1.089.435 1.58.435a2.004 2.004 0 0 0 1.961-1.61l.269-1.343a2.005 2.005 0 0 0-1.321-2.285zM15 3c.737 0 1.375.404 1.722 1H14a2 2 0 0 0 2 2h.722c-.347.595-.985 1-1.722 1-1.103 0-2-.896-2-2s.897-2 2-2zm4.579 10.009L16 11.752v4.051l1 1.5V21h2l.001 1H16v-4.303l-2-3V11c0-.551.449-1 1-1 .201 0 .396.061.563.177l4.284 1.489-.268 1.343zM9 7H7c-1.103 0-2 .896-2 2v7c0 1.104.897 2 2 2h2c1.103 0 2-.896 2-2V9c0-1.104-.897-2-2-2zm-2 9V9h2l.001 7H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
