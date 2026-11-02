import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup, render, within} from '@testing-library/react';
import Panel from '..';
import Item from '../../skills-chart-side-information-item';
import {wrappingComponent} from '../../../test/helpers/render-component';
import style from '../style.css';
import Coorpmanager from './fixtures/coorpmanager';
import Default from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});
test.afterEach.always(cleanup);

test('coorpmanager theme keeps item content and enables full-width layout', t => {
  const view = shallow(<Panel {...Coorpmanager.props} />);
  t.true(view.hasClass(style.sidePanel));
  t.truthy(style.coorpmanager);
  t.true(view.hasClass(style.coorpmanager));
  t.is(view.find(Item).length, 5);
  t.deepEqual(
    view.find(Item).map(item => item.props()),
    Coorpmanager.props.sidePanelItems
  );
});

test('omitted theme retains the legacy panel class and children', t => {
  const view = shallow(<Panel {...Default.props} />);
  t.is(view.prop('className'), style.sidePanel);
  t.is(view.prop('data-name'), 'skill-chart-side-panel');
  t.is(view.find(Item).length, 3);
  t.deepEqual(
    view.find(Item).map(item => item.props()),
    Default.props.sidePanelItems
  );
});

test('empty panels support both themes without creating counters', t => {
  [undefined, 'coorpmanager'].forEach(theme => {
    [undefined, null, []].forEach(sidePanelItems => {
      const view = shallow(<Panel theme={theme} sidePanelItems={sidePanelItems} />);
      t.true(view.hasClass(style.sidePanel));
      t.is(view.hasClass(style.coorpmanager), theme === 'coorpmanager');
      t.is(view.find(Item).length, 0);
      t.is(view.children().length, 0);
    });
  });
});

test.serial('panel can change theme and replace or clear its counters', t => {
  const {container, rerender, queryByText} = render(<Panel {...Coorpmanager.props} />, {
    wrapper: wrappingComponent
  });
  const sidePanelItems = [
    {
      icon: {iconName: 'book-open-cover', backgroundColor: '#D9F4F7'},
      title: 'Completed',
      value: '0',
      legend: 'including 0 late'
    }
  ];
  rerender(<Panel sidePanelItems={sidePanelItems} />);
  const panel = container.querySelector('[data-name="skill-chart-side-panel"]');
  t.is(panel.className, style.sidePanel);
  t.is(panel.children.length, 1);
  t.truthy(within(panel).getByText('Completed'));
  t.truthy(within(panel).getByText('0'));
  t.truthy(within(panel).getByText('including 0 late'));
  t.is(queryByText('including 2 late'), null);
  t.is(queryByText('In progress'), null);
  t.is(queryByText('Due soon'), null);
  t.is(queryByText('Overdue'), null);

  rerender(<Panel theme="coorpmanager" />);
  t.true(panel.classList.contains(style.coorpmanager));
  t.is(panel.children.length, 0);
  t.is(queryByText('Completed'), null);

  rerender(<Panel {...Default.props} />);
  t.is(panel.className, style.sidePanel);
  t.is(panel.children.length, 3);
  Default.props.sidePanelItems.forEach(({title, value}, index) => {
    const tile = within(panel.children[index]);
    t.truthy(tile.getByText(title));
    t.truthy(tile.getByText(value));
    t.truthy(tile.getByText('focused skills'));
  });
});
