import * as React from 'react';
import addons from '@storybook/addons';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import flatten from 'lodash/fp/flatten';
import {dependencies} from '../../../storybook/components';

const ADDON_ID = 'storybook-addon-dependencies';
const PANEL_ID = `${ADDON_ID}/dependencies-panel`;

const mapComponents = (fun, componentMap) =>
  pipe(
    map.convert({cap: false})((folder, folderName) =>
      map.convert({cap: false})(
        (component, componentName) => fun(component, componentName, folderName),
        folder
      )
    ),
    flatten
  )(componentMap);

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handlerStoryChange = this.handlerStoryChange.bind(this);
    this.props.api.onStory(this.handlerStoryChange);
  }

  handlerStoryChange(kind, story) {
    this.setState({
      children: {},
      parents: {},
      ...getOr({}, kind, dependencies)
    });
  }

  render() {
    const {children, parents} = this.state;

    const hasChild = !isEmpty(mapComponents(identity, children));
    const hasParent = !isEmpty(mapComponents(identity, parents));

    const parentList = hasParent
      ? <div>
          <h1>Parents</h1>
          <ul>
            {mapComponents(
              (component, componentName, folderName) =>
                <li
                  key={`${folderName}.${componentName}`}
                  onClick={() => this.props.api.selectStory(`${folderName}.${componentName}`)}
                >
                  {`${folderName}.${componentName}`}
                </li>,
              parents
            )}
          </ul>
        </div>
      : null;

    const childList = hasChild
      ? <div>
          <h1>Children</h1>
          <ul>
            {mapComponents(
              (component, componentName, folderName) =>
                <li
                  key={`${folderName}.${componentName}`}
                  onClick={() => this.props.api.selectStory(`${folderName}.${componentName}`)}
                >
                  {`${folderName}.${componentName}`}
                </li>,
              children
            )}
          </ul>
        </div>
      : <div />;
    return (
      <div>
        <div>
          {parentList}
        </div>
        <div>
          {childList}
        </div>
      </div>
    );
  }
}

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Dependencies',
    render: () => <Panel channel={channel} api={api} />
  });
});
