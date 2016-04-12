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
    const Header = props => <header {...props}>{props.children}</header>;
    const Footer = props => <footer {...props}>{props.children}</footer>;
    const Section = props => <section {...props}>{props.children}</section>;
    const Article = props => <article {...props}>{props.children}</article>;

    const tree = (
      <Header>
        <Footer>foo</Footer>
        <Section>
          <Article>baz</Article>
        </Section>
      </Header>
    );

    t.same(walker(resolve, tree), (
      <header>
        <footer>foo</footer>
        <section>
          <article>baz</article>
        </section>
      </header>
    ));
  });
});
