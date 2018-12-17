import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <Path
      d="M12 5a4 4 0 0 0-4 4c0 1.477.81 2.752 2 3.445V14h4v-1.555c1.19-.693 2-1.969 2-3.445a4 4 0 0 0-4-4zm-2 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"
      fill="currentColor"
    />
    <Path
      d="M20 22H4c-1.104 0-2-.897-2-2v-9a1 1 0 0 1 1.64-.767L9.361 15h5.277l5.721-4.768A1.002 1.002 0 0 1 22 11v9c0 1.102-.896 2-2 2zM4 13.134V20h16.002L20 13.134l-4.359 3.633c-.18.15-.407.233-.641.233H9c-.234 0-.461-.082-.641-.232L4 13.134zM20 9h-2V4H6v5H4V2h16z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
