/* eslint-disable flowtype-errors/enforce-min-coverage */
// @flow strict

import type {Content} from '@coorpacademy/progression-engine';
import type {RecommendationAPI} from './definitions';

export const exit = () => {
  window.location.reload();
};

export const retry = (contentRef: string) => {
  window.location.reload();
};

export const back = (content: Content) => {
  window.location.reload();
};

export const nextLevel = (contentRef: string) => {
  window.location.reload();
};

export const seeComment = (content: Content) => {
  window.location.reload();
};

export const openRecommendation = (recommendation: RecommendationAPI) => {
  window.location.reload();
};

export const redirectContentAfterEnd = () => {
  window.location.reload();
};

// TODO: voir avec godu, est-ce que c'est OK de faire ça (car c'est pas du tout une action ui),
//  ou faut-il passer cette info dans le store du player. S'il le faut, à quel moment
//  dans la directive côté mooc, pour qu'elle soit au même temps qu'on charge la progression ?
//  cette fontcion me fait penser à isCommentSent qui est dans utils mais qui se basse sur le state
//  or on n'a pas l'info de contenu sur lequel rediriger dans le state
//  (MAIS ON PEUT EVENTUELLEMENT LE METTRE DANS LA PROGRESSION ?)
export const shouldRedirectToContentAfterEnd = (): boolean => {
  // TODO :Dans son implentation côté mooc cette fonction doit retourner true/false
  //  et côté map-state-to-props de la popin-end être appelé pour construire le CTA du header
  return false;
};

// TODO: sinon l'autre option est que la fonction soit juste
//  mais même problème, cette fonction n'est pas une action et son retour
//  ne se base pas sur le state
export const getRedirectURLAfterEnd = (): string => {
  return '';
};
