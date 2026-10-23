import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import InputFileDraggable from '../../input-file-draggable';
import DragAndDrop from '..';
import defaultFixture from './fixtures/default';

browserEnv();
test.afterEach.always(cleanup);

const {props} = defaultFixture;

test('keeps its English drop and loading texts by default', t => {
  const idle = render(<DragAndDrop {...props} />);
  t.truthy(idle.getByText('Drag & Drop here'));
  cleanup();
  const loading = render(<DragAndDrop {...props} loading />);
  t.truthy(loading.getByText('Uploading'));
});

test('takes the drop and loading texts from props', t => {
  const idle = render(<DragAndDrop {...props} dragAndDropLabel="Déposez votre fichier ici" />);
  t.truthy(idle.getByText('Déposez votre fichier ici'));
  t.is(idle.queryByText('Drag & Drop here'), null);
  cleanup();
  const loading = render(<DragAndDrop {...props} loading loadingLabel="Vérification…" />);
  t.truthy(loading.getByText('Vérification…'));
  t.is(loading.queryByText('Uploading'), null);
});

test('input-file-draggable forwards both texts', t => {
  const idle = render(
    <InputFileDraggable {...props} dragAndDropLabel="Drop the file" onChange={() => {}} />
  );
  t.truthy(idle.getByText('Drop the file'));
  cleanup();
  const loading = render(
    <InputFileDraggable {...props} loading loadingLabel="Checking logins" onChange={() => {}} />
  );
  t.truthy(loading.getByText('Checking logins'));
});
