const App = components => state => {
  console.log(components);
  const createSlide = components.createSlide;
  const skin = {
    primary: '#F0F'
  };

  const Slide = createSlide({skin});
  return Slide(state.question);
}

export default components => App(components);
