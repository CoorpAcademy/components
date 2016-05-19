import apiCheck from 'api-check';

const check = apiCheck();

const spec = types => {
  return check.shape(types);
};

const validate = conditions => {
  const validation = (props, children) => {
    if (conditions.props) check.throw(conditions.props, props);
    if (conditions.children) check.throw(conditions.children, children);
  };

  validation.conditions = conditions;
  return validation;
};

export {
  spec,
  validate,
  check
};
