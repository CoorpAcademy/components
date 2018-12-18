import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 13 13" {...props}>
    <Path
      fill="currentColor"
      d="M10.28 4.495c.75.874 1.125 1.923 1.16 3.146-.035 1.381-.495 2.517-1.38 3.443-.887.91-1.994 1.399-3.34 1.416-1.346-.035-2.454-.507-3.357-1.416C2.494 10.176 2.034 9.022 2 7.641c.034-1.223.426-2.272 1.159-3.146.75-.873 1.686-1.415 2.862-1.625v-.944h-.477a.431.431 0 0 1-.324-.14.453.453 0 0 1-.136-.332c0-.122.051-.244.136-.332A.493.493 0 0 1 5.544 1H7.93a.46.46 0 0 1 .323.14.453.453 0 0 1 .137.332c0 .14-.052.245-.137.332a.431.431 0 0 1-.323.14h-.495v.926c1.16.21 2.113.752 2.846 1.625zm-1.038 5.733c.664-.682 1.005-1.538 1.039-2.57-.034-1.013-.375-1.87-1.057-2.55-.664-.682-1.499-1.032-2.487-1.05-1.005.018-1.84.368-2.505 1.05-.681.68-1.022 1.52-1.04 2.533.018 1.031.359 1.888 1.023 2.57.665.681 1.5 1.03 2.505 1.048 1.022 0 1.857-.35 2.522-1.031zm-.17-1.206l-.29.437c-.035.052-.069.087-.12.105h-.05c-.035 0-.07 0-.103-.018L6.31 7.991a.16.16 0 0 1-.068-.14V5.23c0-.052.017-.087.068-.14a.214.214 0 0 1 .153-.07h.494c.051 0 .086.018.137.07.034.036.068.088.068.14v2.238L9.02 8.76c.085.052.102.14.051.262z"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
