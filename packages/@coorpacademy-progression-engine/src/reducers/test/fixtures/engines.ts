export interface FakeContent {
  ref: 'microlearning' | 'learner',
  version: string
}

export const microlearning: FakeContent = {
  ref: 'microlearning',
  version: '1'
};

export const learner: FakeContent = {
  ref: 'learner',
  version: '1'
};
