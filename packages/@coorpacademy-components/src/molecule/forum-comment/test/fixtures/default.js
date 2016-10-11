export default {
  props: {
    onChange: e => console.log(e.target.value),
    onPost: e => console.log('post !')
  }
};
