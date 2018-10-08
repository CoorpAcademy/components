export default {
  props: {
    myTeam: {
      name: 'Team 1',
      number: 0,
      members: [
        {
          name: 'Joe De la Mortega y arrogon',
          avatar: 'https://api.adorable.io/avatars/150/Joe.png',
          isMe: false
        },
        {name: 'Abott', avatar: 'https://api.adorable.io/avatars/150/abott.png', isMe: true},
        {name: 'John', avatar: 'https://api.adorable.io/avatars/150/john.png', isMe: false},
        {name: 'Paul', avatar: 'https://api.adorable.io/avatars/150/Paul.png', isMe: false},
        {name: 'Jack', avatar: 'https://api.adorable.io/avatars/150/Jack.png', isMe: false}
      ]
    }
  }
};
