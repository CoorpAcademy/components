// -----------------------------------------------------------------------------

export const IS_FETCHING_TRUE = '@@is-fetching/TRUE';

// -----------------------------------------------------------------------------

export type IsFetching = {
  type: typeof IS_FETCHING_TRUE;
};

// -----------------------------------------------------------------------------
export const setIsFetching = (): IsFetching => ({type: IS_FETCHING_TRUE});
