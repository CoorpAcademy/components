const createDecorator = ({h}, Wrapper) => Element => props => {
  return  (
    <Wrapper>
      <Element>
        {props.children}
      </Element>
    </Wrapper>
  );
};

export default createDecorator;