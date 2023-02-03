import React from 'react';
import ReactDOM from 'react-dom/server';
import get from 'lodash/fp/get';
import PropTypes from 'prop-types';
import mockTranslate from '@coorpacademy/translate';
import {render} from '@testing-library/react-native';
import Provider from '../../atom/provider';
import {TemplateContext} from '../../template/app-review/template-context';

export const context = {
  skin: {
    images: {
      tree: 'dummy.url'
    }
  },
  translate: mockTranslate
};

const renderComponent = (t, Component, fixture) => {
  t.true(
    undefined !== fixture.props || undefined !== fixture.children,
    'fixture should have props or children'
  );

  const vTree = <Component {...fixture.props}>{fixture.children}</Component>;

  const wrappedVTree = (
    <Provider {...context} translate={mockTranslate}>
      {vTree}
    </Provider>
  );

  try {
    return ReactDOM.renderToStaticMarkup(wrappedVTree);
  } catch (e) {
    console.log(`[------ ❌ [web rendering]---> error for ${Component.name}`);
    console.log(e);
    console.log('-------------------]');
  }
};

const renderNativeComponent = (t, Component, fixture) => {
  let vDom;

  if (fixture.mobileContext) {
    try {
      vDom = (
        <TemplateContext values={fixture.mobileContext}>
          <Component {...fixture.props} />
        </TemplateContext>
      );
    } catch (e) {
      console.log(
        `[------ ❌ [native rendering]---> error for ${Component.name}, vDom building step`
      );
      console.log(e);
      console.log('-------------------]');
      throw e;
    }
  } else {
    vDom = <Component {...fixture.props} />;
  }

  try {
    const {toJSON} = render(vDom);
    const json = toJSON();

    if (Array.isArray(json)) {
      json.forEach(el => t.is(get('type', el), 'react-native-mock'));
    } else {
      t.is(get('type', json), 'react-native-mock');
    }
  } catch (e) {
    console.log(`[------ ❌ [native rendering]---> error for ${Component.name}`);
    console.log(e);
    console.log('-------------------]');
  }
};

const wrappingComponent = ({children}) => <Provider {...context}>{children}</Provider>;

wrappingComponent.propTypes = {
  children: PropTypes.node
};

export {renderComponent, renderNativeComponent, wrappingComponent};
