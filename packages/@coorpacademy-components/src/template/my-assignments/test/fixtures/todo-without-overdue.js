import fixture, {sections, tabs} from './default';

// An empty section is not rendered.
export default {
  props: {
    ...fixture.props,
    tabs: tabs('todo', 5),
    sections: sections.filter(section => section.key !== 'overdue')
  }
};
