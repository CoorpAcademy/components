import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M19.996 4.415L18.582 3l-1.684 1.685A7.93 7.93 0 0 0 11.998 3C8.456 3 6.633 5.051 5.633 6.05a.997.997 0 0 0 0 1.415L3.512 9.586c-2.724 2.722-.491 8.857-.229 9.549.102.266.313.476.578.577 2.844 1.086 7.398 1.925 9.549-.227l2.121-2.12a1 1 0 0 0 1.414 0c3.9-3.9 3.732-8.219 1.366-11.265l1.685-1.685zm-8 13.656c-1.404 1.405-5.25.505-6.995-.076-.583-1.743-1.483-5.587-.075-6.995l2.121-2.122 7.07 7.071-2.121 2.122zm4.242-2.828l-1.453-1.454 1.636-1.636-1.414-1.414-1.636 1.636-.707-.707 2.343-2.344-1.414-1.414-2.343 2.343-.707-.708 1.635-1.635-1.414-1.415-1.635 1.637-1.375-1.375A5.965 5.965 0 0 1 11.998 5c1.602 0 3.108.624 4.241 1.757a6.007 6.007 0 0 1-.001 8.486z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
