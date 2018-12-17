import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M16 6C16 4.058 13.288.938 12.744.332c-.379-.422-1.109-.422-1.488 0C10.712.938 8 4.058 8 6c0 2.206 1.795 4 4 4s4-1.794 4-4zm-4 2c-1.104 0-2-.898-2-2 0-.638.939-2.126 2-3.452C13.061 3.874 14 5.362 14 6c0 1.102-.896 2-2 2zM20 22h-2v-3.766c.613-.549 1-1.348 1-2.234v-5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zM8 22V12h9v4a1.001 1.001 0 0 1-2 0v-1a1 1 0 0 0-1-1h-3v2h2c0 1.654 1.346 3 3 3v3H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
