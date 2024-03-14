export default {
  props: {
    data: [
      {
        competency: 'Adaptability and resilience',
        profile_1_value: 15.6
        // profile_2_value: 20
      },
      {
        competency: 'Digital culture',
        profile_1_value: 43.8
        // profile_2_value: 50
      },
      {
        competency: 'Problem solving',
        profile_1_value: 56.4
        // profile_2_value: 60
      },
      {
        competency: 'Leadership',
        profile_1_value: 59.1
        // profile_2_value: 70
      },
      {
        competency: 'Time management',
        profile_1_value: 34.9
        // profile_2_value: 40
      },
      {
        competency: 'Sustainable thinking',
        profile_1_value: 82.3
        // profile_2_value: 90
      }
    ],
    keys: ['profile_1_value'],
    // keys: ['profile_1_value', 'profile_2_value'],
    indexBy: 'competency'
  }
};
