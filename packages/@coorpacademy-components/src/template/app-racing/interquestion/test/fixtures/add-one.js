export default {
  props: {
    header: {
      title: 'Bonne réponse !',
      success: true,
      points: 1,
      pointsDescription: "Vous faites avancer votre équipe d'un pas"
    },
    race: {
      length: 20,
      teams: {
        1: [
          {
            user: 'user_1',
            value: 1
          },
          {
            user: 'user_2',
            value: 1
          }
        ],
        2: [
          {
            user: 'user_3',
            value: 1
          },
          {
            user: 'user_4',
            value: 1
          },
          {
            user: 'user_3',
            value: 1
          },
          {
            user: 'user_4',
            value: 1
          }
        ],
        3: [
          {
            user: 'user_5',
            value: 1
          },
          {
            user: 'user_6',
            value: 1
          }
        ]
      }
    },
    teamMembers: [
      {
        name: 'Angelina',
        status: 'succeeded',
        avatarUrl: 'http://blog.mozilla.org/hacks/files/2013/06/angelina.jpg',
        statusDescription: 'A obtenu une bonne réponse',
        points: 1
      },
      {
        name: 'Edmund',
        status: 'failed',
        avatarUrl: 'https://i0.wp.com/zobra.ru/cache/p6280-610x-il_fullxfull-313300268.jpg',
        statusDescription: 'A obtenu une mauvaise réponse',
        points: -1
      },
      {
        name: 'James',
        status: 'answering',
        avatarUrl: 'http://2012.lxjs.org/assets/images/speakers_substack.jpg',
        statusDescription: 'A obtenu une mauvaise réponse',
        points: -1
      }
    ],
    cta: {
      submitValue: 'Question suivante',
      disabled: true,
      primary: true
    }
  }
};
