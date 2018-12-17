import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M17.768 9.341l-5-6c-.38-.456-1.156-.456-1.536 0l-5 6c-.15.18-.232.407-.232.641v10c0 .551.448 1 1 1h1v2c0 .551.448 1 1 1h6c.552 0 1-.449 1-1v-2h1c.552 0 1-.449 1-1v-10c0-.234-.083-.461-.232-.641zM12 5.543l2.865 3.456h-5.73L12 5.543zm2 16.456h-4v-1.017h4v1.017zm-6-3v-8.017h8v8.017H8z" />
      <Path d="M12 12.999h-2v2.983c0 .551.448 1 1 1h3v-1.983h-2v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
