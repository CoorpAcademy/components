import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <Path
      fill="currentColor"
      d="M20.185 6.383l.785-3.14-1.941-.486-.781 3.128c-2.159-.113-3.236 1.21-4.398 2.969-.643.974-1.25 1.893-2.166 2.198-4.818 1.606-7.447.977-7.447.977a1 1 0 0 0-.943.265l-1 1a1.001 1.001 0 0 0-.279.872C2.025 14.233 3.254 21 12 21c7.895 0 10-6.285 10-10 0-1.658-.002-3.668-1.815-4.617zM12 19c-4.242 0-6.267-1.816-7.215-3.297 1.352.777 3.531 1.766 5.885 1.766.729 0 1.474-.095 2.216-.32 2.735-.83 4.775-3.209 6.063-7.072l-1.898-.633c-1.068 3.209-2.663 5.156-4.738 5.789-2.262.692-4.709-.276-6.223-1.096 1.397-.036 3.514-.284 6.227-1.188 1.572-.524 2.438-1.836 3.202-2.993 1.067-1.616 1.7-2.372 3.239-1.986C19.854 8.244 20 8.828 20 11c0 .819-.225 8-8 8z"
    />
  </Svg>
);

export default SvgComponent;
