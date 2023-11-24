export default {
  props: {
    id: '12345356',
    author: 'Bob',
    date: 'environ une heure',
    message:
      'Un doute sur une question affirmant que des pièces justificatives périmées sont validées afin de créer son identité national de santé ?',
    avatar: 'https://avatars0.githubusercontent.com/u/910636?v=3&s=460',
    avatarAlt: 'bob profile picture',
    profileAvatarAlt: 'Your profile picture',
    edition: 'Now this is a post guys.',
    onAnswer: e => console.log('onAnswer !'),
    onEdit: e => console.log('onEdit !'),
    onPostAnswer: e => console.log('onPostAnswer !'),
    onPostEdition: e => console.log('onPostEdition !'),
    onChangeAnswer: e => console.log('onChangeAnswer !'),
    onChangeEdition: e => console.log('onChangeEdition !'),
    onModerate: e => console.log('onModerate !'),
    onDelete: e => console.log('onDelete !'),
    answers: [
      {
        id: '12345356',
        author: 'Bob',
        date: 'environ une heure',
        message:
          'Je vous remercie pour votre participation. Le Référentiel national d\'identitovigilance mentionne (RNIV) "la présentation d’un document d’identité à haut niveau de confiance, français ou étranger, dont la date de validité est dépassée n’empêche pas d’attribuer le statut identité validée".  Donc ces pièces justificatives sont valables. Site RNIV https://esante.gouv.fr/sites/default/files/media_entity/documents/RNIV%201%20Principes%20communs%20v1.3.pdf',
        avatar: 'https://avatars0.githubusercontent.com/u/910636?v=3&s=460',
        avatarAlt: 'bob profile picture',
        profileAvatarAlt: 'Your profile picture',
        edition: 'Now this is a post guys.',
        onAnswer: e => console.log('onAnswer !'),
        onEdit: e => console.log('onEdit !'),
        onPostAnswer: e => console.log('onPostAnswer !'),
        onPostEdition: e => console.log('onPostEdition !'),
        onChangeAnswer: e => console.log('onChangeAnswer !'),
        onChangeEdition: e => console.log('onChangeEdition !'),
        onModerate: e => console.log('onModerate !'),
        onDelete: e => console.log('onDelete !')
      }
    ]
  }
};
