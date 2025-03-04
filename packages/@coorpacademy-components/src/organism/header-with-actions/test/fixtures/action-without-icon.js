import singleActionFixture from './single-action';

const actionWithoutIconFixture = {
  props: {
    ...singleActionFixture.props,
    actionButtons: [{label: 'Archive', onClick: () => console.log('click on Archive')}]
  }
};

export default actionWithoutIconFixture;
