export default {
  props: {
    avatar: 'https://avatars0.githubusercontent.com/u/910636?v=3&s=460',
    profileAvatarAlt: 'Your profile picture',
    onChange: e => e.target.value,
    onPost: e => console.log('post !'),
    postDisabled: true
  }
};
