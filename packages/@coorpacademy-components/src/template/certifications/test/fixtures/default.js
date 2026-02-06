export const defaultProps = {
  certifications: [
    {
      type: 'certification',
      label: 'label',
      goal: {
        title: 'IA Technology : asses your knowledge on high end tech',
        condition: {
          nbDone: 34
        }
      },
      progress: 23,
      imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
      onClick: () => console.log('click'),
      locales: {
        conditionDescriptionProgress: '<b>23</b> modules to complete'
      }
    },
    {
      type: 'certification',
      label: 'label2',
      goal: {
        title: 'Crisis management : learn how to manage a crisis',
        condition: {
          nbDone: 13
        }
      },
      progress: 100,
      imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
      onClick: () => console.log('click'),
      locales: {
        conditionDescriptionProgress: '<b>13</b> modules to complete'
      }
    },
    {
      type: 'certification',
      label: 'label3',
      goal: {
        title: 'Business development',
        condition: {
          nbDone: 10
        }
      },
      progress: 0,
      imgUrl: 'https://onboarding.coorpacademy.com/api/v1/goals/cert_iMavih1I9g.svg',
      onClick: () => console.log('click'),
      locales: {
        conditionDescriptionProgress: '<b>10</b> modules to complete'
      }
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
  },
  locales: {
    title: 'Certificates',
    subtitle:
      'Demonstrate your knowledge and skills, helping you stand out in your career and achieve rewarding milestones along the way.',
    tag: 'Certification',
    count: '3 certificates'
  }
};

export default {
  props: defaultProps
};
