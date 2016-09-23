export default ({h}) => (Wrapper, wrapperProps) => (Component, elementProps) => (props, children) => {
  return (
    <Wrapper {...wrapperProps}>
      <Component {...elementProps}>
        {children}
      </Component>
    </Wrapper>
  );
};
