const createDecorator = ({h}) => (Wrapper, wrapperProps) => (Element, elementProps) => props => {
  return  (
    <Wrapper {...wrapperProps}>
      <Element {...elementProps}>
        {props.children}
      </Element>
    </Wrapper>
  );
};

export default createDecorator;
