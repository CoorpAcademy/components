import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M21.799 6.399l-3-4a1.002 1.002 0 0 0-.8-.401H6a1 1 0 0 0-.8.401l-3 4a.999.999 0 0 0 .8 1.6h2v9H3v2h2v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h2v-2h-2v-9h2a1 1 0 0 0 .799-1.6zM17 20.999H7v-2h10v2zm0-4H7v-9h4v2H9a1 1 0 0 0-.97 1.243l1 4a1 1 0 0 0 .97.757h4a1 1 0 0 0 .97-.757l1-4A.999.999 0 0 0 15 9.999h-2v-2h4v9zm-3.281-5l-.5 2H10.78l-.5-2h3.439zM5 5.999l1.5-2h11l1.5 2H5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
