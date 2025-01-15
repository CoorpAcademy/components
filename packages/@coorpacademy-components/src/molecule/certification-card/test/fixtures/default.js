export const defaultProps = {
  label: 'label',
  goal: {
    title: 'IA Technology : asses your knowledge on high end tech',
    condition: {
      nbDone: 1
    }
  },
  progress: 23,
  imgUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
  onClick: () => console.log('click'),
  locales: {
    tag: 'Certification',
    conditionDescriptionProgress: '1 module to complete'
  }
};

export default {
  props: defaultProps
};
