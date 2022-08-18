export type AnswerState = string[];
export const EDIT_BASIC = '@@answer/EDIT_BASIC' as const;
export type EditBasicAction = {
  type: typeof EDIT_BASIC;
  payload: string[];
};

const reducer = (
  // eslint-disable-next-line default-param-last
  state: AnswerState = [],
  action: EditBasicAction
): AnswerState => {
  switch (action.type) {
    case EDIT_BASIC: {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
