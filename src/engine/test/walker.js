import test from 'ava';
import forEachEngine from '../../util/for-each-engine';

forEachEngine((name, {h, walker, resolve}) => {
  test(`${name}: should travel each tree's nodes`, t => {
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

  test(`${name}: should resolve each nodes`, t => {
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

    t.deepEqual(walker(resolve, tree), (
      <header>
        <footer>foo</footer>
        <section>
          <article>baz</article>
        </section>
      </header>
    ));
  });
});
