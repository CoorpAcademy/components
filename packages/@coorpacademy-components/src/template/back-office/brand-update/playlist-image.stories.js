import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cardFixture from '../../../molecule/playlist-card/test/fixtures/default';
import fixture from './test/fixtures/wizard-form-edit-playlist';
import BrandUpdate from '.';

const PlaylistImageForm = ({initialImage = false, loading = false, error = ''}) => {
  const [image, setImage] = useState(initialImage ? cardFixture.props.coverImages[0].image : null);
  const [title, setTitle] = useState('Marketing expert');
  const [uploadError, setUploadError] = useState(error);
  const [busy, setBusy] = useState(loading);
  const form = fixture.props.content.content;
  const groups = form.groups.map(group => ({
    ...group,
    fields: group.fields
      .filter(field => field.type !== 'buttonLink')
      .map(field => (field.type === 'text' ? {...field, value: title, onChange: setTitle} : field))
  }));
  const upload = {
    name: 'playlist-cover',
    filesTypes: 'image/jpeg,image/png,image/gif',
    uploadLabel: image ? 'Replace image' : 'Upload image',
    buttonAriaLabel: image ? 'Replace image' : 'Upload image',
    errorButtonLabel: 'Try again',
    description: 'JPEG, PNG or GIF · Max. 5 MB',
    dragAndDropLabel: 'Drag and drop an image here',
    loadingLabel: 'Uploading image…',
    error: uploadError,
    loading: busy,
    onChange: event => {
      const file = event.target.files[0];
      if (!file) return;
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type) || file.size > 5000000) {
        setUploadError('Choose a JPEG, PNG or GIF file up to 5 MB.');
        return;
      }
      setUploadError('');
      setBusy(true);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setBusy(false);
      };
      reader.onerror = () => {
        setUploadError('The image could not be loaded. Try again.');
        setBusy(false);
      };
      reader.readAsDataURL(file);
    }
  };
  const playlistImage = {
    title: 'Playlist image (optional)',
    description:
      'Use a custom image instead of the course mosaic. The same image appears in the catalog and on the playlist detail page.',
    previewLabel: 'Playlist card preview',
    removeLabel: 'Remove image',
    hasImage: Boolean(image),
    onRemove: () => {
      setImage(null);
      setUploadError('');
      setBusy(false);
    },
    upload,
    card: {
      ...cardFixture.props,
      title: title || 'Playlist name',
      coverImages: image ? [{image}] : cardFixture.props.coverImages
    }
  };
  return (
    <BrandUpdate
      {...fixture.props}
      notifications={[]}
      content={{...fixture.props.content, content: {...form, groups, playlistImage}}}
    />
  );
};

PlaylistImageForm.propTypes = {
  initialImage: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default {
  title: 'Template/BackOffice/BrandUpdate/Custom playlist image',
  component: BrandUpdate,
  parameters: {layout: 'fullscreen', chromatic: {viewports: [1440, 1280]}}
};

export const WithoutImage = () => <PlaylistImageForm />;
export const WithImage = () => <PlaylistImageForm initialImage />;
export const Uploading = () => <PlaylistImageForm loading />;
export const UploadError = () => (
  <PlaylistImageForm error="The image could not be uploaded. Choose a JPEG, PNG or GIF file up to 5 MB and try again." />
);
export const Interactive = () => <PlaylistImageForm />;
