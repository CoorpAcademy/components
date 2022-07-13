import type crossFetch from 'cross-fetch';
import fetchSkills from './fetch-skills';
import type {FetchSkills} from './fetch-skills';
import postProgression from './post-progression';
import type {PostProgression} from './post-progression';

type Services = {
  fetchSkills: FetchSkills;
  postProgression: PostProgression;
};

const createServices = (fetch: typeof crossFetch): Services => ({
  fetchSkills: fetchSkills(fetch),
  postProgression: postProgression(fetch)
});

export default createServices;
