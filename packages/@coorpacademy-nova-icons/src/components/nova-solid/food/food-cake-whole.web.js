import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M20.567 18.066A3.993 3.993 0 0 1 15 17.644c-.733.831-1.807 1.356-3 1.356s-2.267-.525-3-1.356a3.993 3.993 0 0 1-5.567.422c-.3.553-.754.934-1.433.934v2c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-2c-.679 0-1.133-.381-1.433-.934zM21 11H3a1 1 0 0 0-1 1v2.998a1 1 0 0 1 1.999-.038l.001.013V15c0 1.103.897 2 2 2s2-.897 2-2a1 1 0 1 1 2 0c0 1.103.896 2 2 2s2-.897 2-2a1 1 0 1 1 2 0c0 1.103.896 2 2 2s2-.897 2-2v-.005-.009V14.973l.001-.013a1 1 0 0 1 1.999.038V12a1 1 0 0 0-1-1zM18 7.815V10h2V7.815A2.992 2.992 0 0 0 22 5c0-1.278-1.522-3.621-2.178-4.568-.373-.541-1.271-.541-1.645 0C17.522 1.379 16 3.722 16 5c0 1.302.838 2.402 2 2.815zm1-4.962c.576.97.992 1.841 1 2.147 0 .551-.449 1-1 1s-1-.449-1-.999c.008-.306.424-1.177 1-2.148zM4 7.815V10h2V7.815A2.992 2.992 0 0 0 8 5C8 3.722 6.477 1.379 5.822.432c-.373-.541-1.272-.541-1.645 0C3.523 1.379 2 3.722 2 5c0 1.302.838 2.402 2 2.815zm1-4.962c.576.97.992 1.841 1 2.147 0 .551-.449 1-1 1s-1-.449-1-.999c.008-.306.424-1.177 1-2.148zM11 7.815V10h2V7.815A2.992 2.992 0 0 0 15 5c0-1.278-1.523-3.621-2.178-4.568-.373-.541-1.271-.541-1.645 0C10.523 1.379 9 3.722 9 5c0 1.302.838 2.402 2 2.815zm1-4.962c.576.97.992 1.841 1 2.147 0 .551-.449 1-1 1s-1-.449-1-.999c.008-.306.424-1.177 1-2.148z" />
    </g>
  </svg>
);

export default SvgComponent;
