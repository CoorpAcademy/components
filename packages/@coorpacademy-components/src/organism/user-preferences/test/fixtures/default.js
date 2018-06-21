export default {
  props: {
    preferences: [
      {
        value: true,
        label: "Je souhaite recevoir des emails d'information ou de relance",
        onChange: console.log
      },
      {
        value: false,
        label: 'Je souhaite recevoir des notifs in-app',
        onChange: console.log
      },
      {
        value: true,
        label: 'Je souhaite recevoir des promos',
        onChange: console.log
      }
    ]
  }
};
