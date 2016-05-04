const createDecorator = ({h}) => (Wrapper, wrapperProps) => (Element, elementProps) => (props, children) => {
  return (
    <Wrapper {...wrapperProps}>
      <Element {...elementProps}>
        {children}
      </Element>
    </Wrapper>
  );
};

export default createDecorator;
