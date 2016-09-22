import test from 'ava';
import h from '../h';
import walker from '../walker';
import resolve from '../resolve';

test('should travel each tree\'s nodes', t => {
  const tree = (
    <header>
      <footer>foo</footer>
      <section>
        <article>baz</article>
      </section>
    </header>
  );

  t.plan(4);
  walker(child => t.pass() || child, tree);
});

test('should resolve each nodes', t => {
  const Header = (props, children) => <header {...props}>{children}</header>;
  const Footer = (props, children) => <footer {...props}>{children}</footer>;
  const Section = (props, children) => <section {...props}>{children}</section>;
  const Article = (props, children) => <article {...props}>{children}</article>;

  const tree = (
    <Header>
      <Footer>foo</Footer>
      <Section>
        <Article>baz</Article>
      </Section>
    </Header>
  );
  const expected = (
    <header>
      <footer>foo</footer>
      <section>
        <article>baz</article>
      </section>
    </header>
  );
  t.deepEqual(walker(resolve, tree), expected);
});
