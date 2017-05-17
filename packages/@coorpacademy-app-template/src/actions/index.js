export const INCREMENT = 'INCREMENT';
export const increment = () => ({type: INCREMENT});

export const DECREMENT = 'DECREMENT';
export const decrement = () => ({type: DECREMENT});

export const ASSIGN = 'ASSIGN';
export const assign = value => ({type: ASSIGN, payload: value});
