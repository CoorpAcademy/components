import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 21v-1.05c1.14-.233 2-1.243 2-2.45 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1h1.805a8.97 8.97 0 0 1-1.782-3H7v1.05c-1.14.232-2 1.242-2 2.45C5 15.879 6.122 17 7.5 17h1a.5.5 0 0 1 0 1H5v2h2v1h2zM4 7l4-4H5V2h4V0H4a1 1 0 0 0-1 1v2H0l4 4zM20 17l-4 4h3v1h-4v2h5a1 1 0 0 0 1-1v-2h3l-4-4zM16 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.59-8 8c0 4.412 3.589 8 8 8zm-1-2.089a6.002 6.002 0 0 1-3.62-2.086l1.771-1.023A3.99 3.99 0 0 0 15 11.859v2.052zm2 0v-2.052a3.994 3.994 0 0 0 1.85-1.058l1.771 1.022A6.003 6.003 0 0 1 17 13.911zM22 8c0 .735-.139 1.437-.382 2.088l-1.779-1.027C19.933 8.722 20 8.37 20 8s-.066-.72-.161-1.061l1.779-1.028C21.861 6.564 22 7.266 22 8zm-5-5.909a5.997 5.997 0 0 1 3.621 2.087L18.85 5.201A3.996 3.996 0 0 0 17 4.142V2.091zM18 8c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .898 2 2zm-3-5.909v2.052a3.987 3.987 0 0 0-1.85 1.059l-1.771-1.023A5.993 5.993 0 0 1 15 2.091zm-4.618 3.821l1.779 1.027C12.067 7.279 12 7.631 12 8c0 .371.067.723.162 1.062l-1.779 1.028A5.968 5.968 0 0 1 10 8c0-.734.139-1.436.382-2.088z" />
      <Path d="M13.947 16.756C13.574 19.708 11.052 22 8 22c-3.309 0-6-2.691-6-6 0-3.052 2.292-5.574 5.244-5.947a9.06 9.06 0 0 1-.241-1.984C3.062 8.563 0 11.928 0 16c0 4.411 3.589 8 8 8 4.073 0 7.438-3.062 7.931-7.003a9.008 9.008 0 0 1-1.984-.241z" />
    </G>
  </Svg>
);

export default SvgComponent;
