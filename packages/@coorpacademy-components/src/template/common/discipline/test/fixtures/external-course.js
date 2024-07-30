import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures/more-info';
import externalCourseCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import Default from './default';

const {props} = Default;
const {rating, maxRating} = externalCourseCTA.props;
const {authors} = disciplinePartners.props;
const {image} = disciplineHeader.props;
export default {
  props: {
    ...props,
    popularity: rating,
    maxPopularity: maxRating,
    authors,
    buy: null,
    buyLabel: null,
    video: null,
    image,
    skills: [
      {
        id: 'skill-id-1',
        ref: 'skill-ref-1',
        locale: 'Skill 1',
        focused: true
      },
      {
        id: 'skill-id-2',
        ref: 'skill-ref-2',
        locale: 'Skill 2'
      },
      {
        id: 'skill-id-3',
        ref: 'skill-ref-3',
        locale: 'Skill 3'
      }
    ],
    onSkillClick: () => console.log('skill clicked'),
    levels: [],
    level: {...props.content, title: null, discussion: {}}
  }
};
