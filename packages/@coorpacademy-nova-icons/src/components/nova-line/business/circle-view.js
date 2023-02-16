import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role || 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <path d="M7.518 3.058l-.899-1.787c-.658.332-1.289.727-1.877 1.172l1.211 1.592a10.043 10.043 0 011.565-.977zM2.679 15.63l-1.863.727c.267.686.601 1.352.991 1.979l1.697-1.057a10.037 10.037 0 01-.825-1.649zM4.592 5.283l-1.48-1.344a12.111 12.111 0 00-1.33 1.768l1.701 1.051c.324-.524.697-1.02 1.109-1.475zM2 12.021l-2 .005c.002.74.071 1.481.207 2.202l1.965-.369c-.113-.602-.17-1.22-.172-1.838zM11.045 2.046L10.857.054c-.736.07-1.468.208-2.176.411l.553 1.922a9.977 9.977 0 011.811-.341zM15.245.445a11.884 11.884 0 00-2.177-.397l-.175 1.992c.612.054 1.223.166 1.813.331l.539-1.926zM22.18 5.643a12.042 12.042 0 00-1.342-1.759l-1.473 1.354c.417.453.793.947 1.119 1.467l1.696-1.062zM21.824 10.122l1.965-.374a12.086 12.086 0 00-.613-2.126l-1.863.729c.224.571.396 1.167.511 1.771zM19.199 2.398a12.093 12.093 0 00-1.886-1.161l-.887 1.793c.55.272 1.079.597 1.571.967l1.202-1.599zM2.664 8.41L.797 7.69a11.894 11.894 0 00-.6 2.133l1.967.36a9.826 9.826 0 01.5-1.773zM3.145 20.099a12.02 12.02 0 001.637 1.488l1.204-1.596c-.49-.37-.95-.789-1.366-1.243l-1.475 1.351zM18.031 19.978l1.207 1.595a12.21 12.21 0 001.634-1.491l-1.479-1.348c-.414.455-.872.873-1.362 1.244zM22 12c0 .619-.057 1.236-.168 1.838l1.967.364c.133-.72.201-1.462.201-2.202v-.046L22 12zM20.506 17.261l1.7 1.054c.389-.627.721-1.293.987-1.981l-1.864-.724a9.969 9.969 0 01-.823 1.651zM11.087 21.959l-.18 1.992a12.366 12.366 0 002.211-.002l-.185-1.993a9.985 9.985 0 01-1.846.003zM6.664 22.751c.66.328 1.355.597 2.066.798l.544-1.925a9.848 9.848 0 01-1.72-.664l-.89 1.791zM14.746 21.619l.548 1.923a11.94 11.94 0 002.063-.802l-.893-1.789c-.55.275-1.128.5-1.718.668z" />
        <circle cx={12} cy={12} r={2} />
        <path d="M20.166 12l-.309-.514C19.723 11.262 16.514 6 12 6s-7.723 5.262-7.857 5.486L3.834 12l.309.515C4.277 12.738 7.486 18 12 18s7.723-5.262 7.857-5.485l.309-.515zM12 16c-2.682 0-4.959-2.814-5.798-4C7.041 10.815 9.318 8 12 8s4.959 2.815 5.798 4c-.839 1.186-3.116 4-5.798 4z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
