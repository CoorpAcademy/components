// @flow

type Instructions = Array<{
  field: string,
  type: string,
  value: number
}>;

type ExitNodeNextContent = {
  type: string,
  ref: 'successExitNode' | 'failExitNode'
};

export type FastSlideNextContent = {
  instructions: Instructions,
  nextContent: ExitNodeNextContent
};
