export const defaultProps = {
  label: 'label',
  goal: {
    title: 'IA Technology : asses your knowledge on high end tech',
    condition: {
      nbDone: 1
    }
  },
  progress: 100,
  imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
  onClick: () => console.log('click'),
  tag: 'Certification',
  locales: {
    conditionDescriptionProgress: '1 module to complete'
  }
};

export default {
  props: defaultProps
};
