import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <path
      fill="currentColor"
      d="M3.002 3.001h5v2h-5zM3.002 9.001h5v2h-5zM3.002 15.001h5v2h-5z"
    />
    <circle cx={13.002} cy={4.001} r={1} fill="currentColor" />
    <circle cx={16.002} cy={4.001} r={1} fill="currentColor" />
    <circle cx={13.002} cy={10.001} r={1} fill="currentColor" />
    <circle cx={16.002} cy={10.001} r={1} fill="currentColor" />
    <path
      d="M10 18.001H2.002v-4H10v-2H2.002v-4h15.999l-.001 4h2.002v-10a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2H10v-2zm-7.998-16h16l-.001 4H2.002v-4z"
      fill="currentColor"
    />
    <path
      d="M18 24.001a.997.997 0 0 1-.515-.143c-.561-.337-5.485-3.39-5.485-6.857 0-2.393 1.607-4 4-4 .735 0 1.451.332 2 .846.549-.514 1.265-.846 2-.846 2.393 0 4 1.607 4 4 0 3.467-4.924 6.521-5.485 6.857a.997.997 0 0 1-.515.143zm-2-9c-1.805 0-2 1.398-2 2 0 1.738 2.578 3.846 4 4.811 1.422-.965 4-3.072 4-4.811 0-.602-.195-2-2-2-.449 0-1 .551-1 1a1 1 0 1 1-2 0c0-.449-.551-1-1-1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
