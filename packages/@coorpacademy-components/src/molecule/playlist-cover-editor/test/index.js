import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
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
  t.truthy(within(view.container).getByText('Marketing expert'));
  t.falsy(within(view.container).queryByText('Remove image'));
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
  const remove = within(view.container).getByRole('button', {name: 'Remove image'});
  fireEvent.click(remove);
  t.true(removed);
});

test('a failed upload can be cleared before an image is selected', t => {
  let cleared = false;
  const view = render(
    <PlaylistCoverEditor
      {...props}
      upload={{...props.upload, error: 'Upload failed'}}
      onRemove={() => {
        cleared = true;
      }}
    />
  );
  t.truthy(within(view.container).getByText('Upload failed'));
  fireEvent.click(within(view.container).getByRole('button', {name: 'Remove image'}));
  t.true(cleared);
});
