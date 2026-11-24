import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import PlaylistCoverEditor from '..';

browserEnv();
test.afterEach(cleanup);

const props = {
  title: 'Playlist image (optional)',
  previewLabel: 'Playlist card preview',
  removeLabel: 'Remove image',
  onRemove: () => {},
  hasImage: false,
  upload: {
    uploadLabel: 'Upload image',
    buttonAriaLabel: 'Upload image',
    filesTypes: 'image/jpeg,image/png,image/gif'
  },
  card: {type: 'playlist', title: 'Marketing expert', coverImages: [{image: 'cover.jpg'}]}
};

test('optional cover input accepts supported images and renders the real playlist card', t => {
  const view = render(<PlaylistCoverEditor {...props} />);
  const input = view.container.querySelector('input[type="file"]');
  t.is(input.getAttribute('type'), 'file');
  t.is(input.getAttribute('accept'), 'image/jpeg,image/png,image/gif');
  t.false(input.required);
  t.truthy(view.getByText('Marketing expert'));
  t.falsy(view.queryByText('Remove image'));
});

test('the remove control is keyboard accessible and invokes cover removal', t => {
  let removed = false;
  const view = render(
    <PlaylistCoverEditor
      {...props}
      hasImage
      onRemove={() => {
        removed = true;
      }}
    />
  );
  const remove = view.getByRole('button', {name: 'Remove image'});
  fireEvent.click(remove);
  t.true(removed);
});
