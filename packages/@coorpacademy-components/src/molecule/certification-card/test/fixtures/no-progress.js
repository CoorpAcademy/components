export const defaultProps = {
  type: 'certification',
  label: 'label',
  goal: {
    title: 'IA Technology : asses your knowledge on high end tech',
    condition: {
      nbDone: 1
    }
  },
  progress: 0,
  imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
  onClick: () => console.log('click'),
  locales: {
    tag: 'Certification',
    conditionDescriptionProgress: '<b>1</b> module to complete'
  }
};

export default {
  props: defaultProps
};
