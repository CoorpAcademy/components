import test from 'ava';
import React, {ComponentType} from 'react';
import ReactDOMServer from 'react-dom/server';
import Provider from '../../../atom/provider';
import CertificationDetail from '..';
import complete from './fixtures/complete';
import completeWithLinkedin from './fixtures/complete-with-linkedin';

type AnyProps = {[key: string]: unknown};
// The template has required propTypes; the fixtures supply them at runtime.
const Certification = CertificationDetail as unknown as ComponentType<AnyProps>;

const context = {
  skin: {images: {tree: 'dummy.url'}},
  translate: (key: string) => key
};

const render = (props: AnyProps) =>
  ReactDOMServer.renderToStaticMarkup(
    <Provider {...context}>
      <Certification {...props} />
    </Provider>
  );

// S1 line 1 + S3 — the template threads the LinkedIn props into the badge section
test('CertificationDetail renders the LinkedIn button in the badge section', t => {
  const html = render(completeWithLinkedin.props);
  t.true(html.includes('data-name="publish-linkedin-button"'), 'LinkedIn button should be present');
  t.true(
    html.includes(completeWithLinkedin.props.linkedinShareUrl),
    'the injected share URL should appear in the rendered markup'
  );
});

// S3 — without the prop the template renders no LinkedIn button (backward compatible)
test('CertificationDetail renders no LinkedIn button when no share URL is provided', t => {
  const html = render(complete.props);
  t.false(html.includes('data-name="publish-linkedin-button"'));
});
