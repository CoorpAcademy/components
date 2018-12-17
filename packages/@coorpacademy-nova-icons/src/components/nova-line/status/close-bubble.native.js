import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12.042 23a4.652 4.652 0 0 1-3.754-1.934 4.657 4.657 0 0 1-4.024-1.287 4.652 4.652 0 0 1-1.286-4.024A4.648 4.648 0 0 1 1.042 12c0-1.494.739-2.893 1.936-3.754a4.654 4.654 0 0 1 1.285-4.024 4.65 4.65 0 0 1 4.025-1.286C9.149 1.739 10.548 1 12.042 1s2.892.739 3.754 1.936a4.65 4.65 0 0 1 4.024 1.286 4.655 4.655 0 0 1 1.286 4.025 4.646 4.646 0 0 1 1.936 3.754 4.65 4.65 0 0 1-1.936 3.755 4.65 4.65 0 0 1-1.285 4.023 4.587 4.587 0 0 1-3.264 1.349c-.256 0-.51-.021-.761-.061A4.651 4.651 0 0 1 12.042 23zM9.28 18.667l.387.817C10.11 20.42 11.02 21 12.042 21s1.931-.581 2.374-1.515l.388-.818.852.304a2.667 2.667 0 0 0 2.751-.606 2.614 2.614 0 0 0 .606-2.75l-.304-.852.817-.388c.935-.443 1.516-1.354 1.516-2.375s-.581-1.931-1.515-2.373l-.818-.387.304-.853a2.613 2.613 0 0 0-.607-2.751 2.664 2.664 0 0 0-2.75-.607l-.852.304-.388-.817C13.973 3.582 13.063 3 12.042 3s-1.932.582-2.375 1.516l-.387.817-.852-.304a2.666 2.666 0 0 0-2.751.607 2.618 2.618 0 0 0-.607 2.752l.304.853-.818.386c-.934.443-1.514 1.352-1.514 2.373s.581 1.932 1.516 2.375l.817.388-.305.852a2.614 2.614 0 0 0 .607 2.75 2.662 2.662 0 0 0 2.75.606l.853-.304z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M16.662 8.707l-1.414-1.414-3.293 3.293-3.293-3.293-1.414 1.414L10.541 12l-3.293 3.293 1.414 1.414 3.293-3.292 3.293 3.292 1.414-1.414L13.369 12z"
    />
  </Svg>
);

export default SvgComponent;
