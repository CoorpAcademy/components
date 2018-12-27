// @flow strict

type FindById = (progressionId: string, slideId: string) => Promise<Clue>;
type CluesService = {|
  findById: FindById
|}; 

export type {FindById, CluesService};
