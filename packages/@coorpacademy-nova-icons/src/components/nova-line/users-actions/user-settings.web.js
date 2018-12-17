import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M8.002 16.006c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.794 4-4 4zm0-6a2 2 0 1 0 .001 4.001 2 2 0 0 0-.001-4.001zM16.002 24.006h-16v-1c0-3.533 3.289-6 8-6s8 2.467 8 6v1zm-13.841-2h11.684c-.599-1.808-2.834-3-5.842-3s-5.244 1.192-5.842 3zM24.002 7.006v-2H22.9a4.987 4.987 0 0 0-.733-1.754l.784-.784-1.414-1.414-.785.784a4.922 4.922 0 0 0-1.751-.73V.006h-2v1.102a4.952 4.952 0 0 0-1.753.731l-.783-.783-1.414 1.414.783.783a4.961 4.961 0 0 0-.732 1.753H12v2h1.102c.131.638.385 1.229.732 1.754l-.783.784 1.415 1.413.782-.784a4.936 4.936 0 0 0 1.754.731v1.103h2v-1.103a4.961 4.961 0 0 0 1.753-.732l.784.783 1.413-1.415-.784-.782a4.957 4.957 0 0 0 .732-1.752h1.102zm-6.002 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
