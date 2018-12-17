import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 2c.787 0 1.547.119 2.266.332A.988.988 0 0 0 14 5a1 1 0 0 0 1 1c.527 0 .945-.41.985-.926a7.998 7.998 0 0 1 4.002 6.671C19.727 12.14 19.042 13 18 13c-1.115 0-1.82-.982-2.033-1.327C15.797 9.622 14.094 8 12 8s-3.797 1.623-3.967 3.673C7.82 12.018 7.115 13 6 13c-1.045 0-1.729-.864-1.987-1.255C4.148 7.453 7.675 4 12 4zm2 8c0 1.103-.896 2-2 2s-2-.897-2-2a2 2 0 0 1 4 0zm-2 8c-3.468 0-6.42-2.222-7.526-5.314.445.189.95.314 1.526.314 1.098 0 1.953-.441 2.58-.956C9.279 15.21 10.544 16 12 16s2.721-.79 3.42-1.956c.627.515 1.482.956 2.58.956.576 0 1.081-.125 1.526-.314C18.42 17.777 15.468 20 12 20z" />
      <circle cx={6} cy={9} r={1} />
      <circle cx={10} cy={7} r={1} />
      <circle cx={18} cy={10} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
