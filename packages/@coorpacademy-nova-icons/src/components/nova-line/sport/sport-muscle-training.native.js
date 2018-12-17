import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24.002h-24z" />
    <Path
      d="M11.455 20H8c-3.309 0-6-2.691-6-6V6c0-1.104.897-2 2-2h3.613A2.003 2.003 0 0 1 9.51 6.633l-.333 1a2.002 2.002 0 0 1-1.693 1.358l1.222 2.996c1.166-.52 2.594-.692 3.931-.467C13.583 9.909 15.366 9 17.179 9c2.304 0 4.245 1.451 4.72 3.531.583 2.555-1.23 5.029-3.875 5.633a5.36 5.36 0 0 1-2.095.061C14.905 19.334 13.258 20 11.455 20zM4 6v8c0 2.205 1.794 4 4 4h3.455c1.405 0 2.678-.564 3.243-1.439a1 1 0 0 1 1.139-.411 3.342 3.342 0 0 0 1.74.064c.81-.185 1.501-.636 1.949-1.272.425-.602.575-1.301.423-1.967-.315-1.382-1.929-2.257-3.542-1.888-1.063.242-1.933.98-2.271 1.925a1 1 0 0 1-1.231.62c-1.39-.42-3.071-.174-4.093.593a.999.999 0 0 1-1.526-.422L5.074 8.378A1 1 0 0 1 6 7h1.279l.333-1H4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
