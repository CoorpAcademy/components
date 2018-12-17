import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.394 17.082l-2.257-.968.853-5.972-1.98-.284-.777 5.44-2.246-.962-1.011-4.553-1.952.434L8.753 18H8a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.606-.918zM15 22h-4.382l-1-2H10a1.002 1.002 0 0 0 .976-1.217l-.454-2.043L15 18.659V22zM6.707 1.293L5.293 2.707 6.586 4H3v2h3.586L5.293 7.293l1.414 1.414L10.414 5zM21 4h-3.586l1.293-1.293-1.414-1.414L13.586 5l3.707 3.707 1.414-1.414L17.414 6H21z" />
    </G>
  </Svg>
);

export default SvgComponent;
