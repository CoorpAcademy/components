export default {
    props: {
      id: '98aze89138',
      title: 'Boutique',
      onUp: e => {
        console.log(e);
      },
      onDown: e => {
        console.log(e);
      },
      display: {
        value: true,
        onChange: value => console.log(value)
      }
    }
  };
