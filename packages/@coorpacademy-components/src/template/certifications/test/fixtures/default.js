export const defaultProps = {
  certifications: [
    {
      label: 'label',
      goal: {
        title: 'IA Technology : asses your knowledge on high end tech',
        condition: {
          nbDone: 34
        }
      },
      progress: 23,
      imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
      onClick: () => console.log('click')
    },
    {
      label: 'label2',
      goal: {
        title: 'Crisis management : learn how to manage a crisis',
        condition: {
          nbDone: 13
        }
      },
      progress: 100,
      imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
      onClick: () => console.log('click')
    },
    {
      label: 'label3',
      goal: {
        title: 'Business development',
        condition: {
          nbDone: 10
        }
      },
      progress: 0,
      imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
      onClick: () => console.log('click')
    }
  ],
  sorting: {
    theme: 'skillDetail',
    options: [
      {
        name: 'Alphabetical',
        value: 'alphabetical',
        selected: true
      },
      {
        name: 'Completion',
        value: 'completion',
        selected: false
      },
      {
        name: 'Newest',
        value: 'newest',
        selected: false
      }
    ],
    onChange: value => console.log(value)
  }
};

export default {
  props: defaultProps
};
