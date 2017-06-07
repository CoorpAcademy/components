import React from 'react';
import PropTypes from 'prop-types';
import fill from 'lodash/fp/fill';
import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import Heart from '../../atom/heart';

const Lives = props => {
  const {remaining = 0, total = 3} = props;

  const remainLives = pipe(fill(0, total, false), fill(0, remaining, true))(new Array(total));

  const Hearts = map.convert({cap: false})(
    (full, index) => <Heart full={full} key={index} />,
    remainLives
  );

  return (
    <div>
      {Hearts}
    </div>
  );
};

Lives.propTypes = {
  remaining: PropTypes.number,
  total: PropTypes.number
};

export default Lives;
