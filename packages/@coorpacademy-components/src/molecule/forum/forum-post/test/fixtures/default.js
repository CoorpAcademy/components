export default {
  props: {
    id: '12345356',
    author: 'Bob',
    date: 'environ une heure',
    message: 'Now this is a post guys.',
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
};
