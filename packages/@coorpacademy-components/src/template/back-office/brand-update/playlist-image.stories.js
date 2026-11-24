import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cardFixture from '../../../molecule/playlist-card/test/fixtures/default';
import fixture from './test/fixtures/wizard-form-edit-playlist';
import BrandUpdate from '.';

const PlaylistImageForm = ({
  creation = false,
  initialImage = false,
  loading = false,
  error = ''
}) => {
  const [image, setImage] = useState(initialImage ? cardFixture.props.coverImages[0].image : null);
  const [title, setTitle] = useState(creation ? '' : 'Marketing expert');
  const [description, setDescription] = useState(
    creation
      ? ''
      : fixture.props.content.content.groups[0].fields.find(field => field.type === 'textarea')
          .value
  );
  const [uploadError, setUploadError] = useState(error);
  const [busy, setBusy] = useState(loading);
  const form = fixture.props.content.content;
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
  const mosaic = creation ? [] : cardFixture.props.coverImages;
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
      progress: 0,
      locales: {
        ...cardFixture.props.locales,
        coursesLabel: creation ? '<b>0</b> courses' : cardFixture.props.locales.coursesLabel
      },
      coverImages: image ? [{image}] : mosaic
    }
  };
  const groups = form.groups.map(group => ({
    ...group,
    fields: group.fields
      .filter(field => field.type !== 'buttonLink')
      .reduce((fields, field) => {
        let nextField = {...field, hint: undefined};
        if (field.type === 'text') {
          nextField = {
            ...field,
            value: title,
            onChange: setTitle,
            hint: field.hint.replace(/^\d+/, title.length)
          };
        } else if (field.type === 'textarea') {
          nextField = {
            ...field,
            value: description,
            onChange: setDescription,
            hint: field.hint.replace(/^\d+/, description.length)
          };
        }
        return fields.concat(
          field.type === 'textarea'
            ? [nextField, {...playlistImage, type: 'playlistCover'}]
            : [nextField]
        );
      }, [])
  }));
  return (
    <BrandUpdate
      {...fixture.props}
      notifications={[]}
      content={{
        ...fixture.props.content,
        wizardHeader: {
          ...fixture.props.content.wizardHeader,
          title: creation ? 'Create custom playlist' : 'Edit custom playlist'
        },
        summary: {
          ...fixture.props.content.summary,
          sections: fixture.props.content.summary.sections.map(section => ({
            ...section,
            items: section.items.map(item =>
              item.title === 'Name' ? {...item, value: title} : item
            )
          }))
        },
        content: {...form, groups}
      }}
    />
  );
};

PlaylistImageForm.propTypes = {
  creation: PropTypes.bool,
  initialImage: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default {
  title: 'Template/BackOffice/BrandUpdate/Custom playlist image',
  component: BrandUpdate,
  parameters: {layout: 'fullscreen', chromatic: {viewports: [1440, 1280]}}
};

export const CreationEmpty = () => <PlaylistImageForm creation />;
CreationEmpty.play = async ({canvasElement}) => {
  await canvasElement.ownerDocument.fonts.ready;
  const editor = canvasElement.querySelector('[data-name="playlist-cover-editor"]');
  const drop = editor.querySelector('[data-name="drag-and-drop-box"]');
  const card = editor.querySelector('[data-name^="playlist-card-"]');
  const dropBounds = drop.getBoundingClientRect();
  const cardBounds = card.getBoundingClientRect();
  if (
    dropBounds.right <= cardBounds.left &&
    Math.abs(dropBounds.top - cardBounds.top) < 60 &&
    Math.abs(dropBounds.bottom - cardBounds.bottom) > 1
  ) {
    throw new Error('The drop zone must align with the bottom of the playlist card.');
  }
  if (
    !card.textContent.includes('0 courses') ||
    card.querySelector('[style*="background-image"]')
  ) {
    throw new Error('A new playlist must preview zero courses without a cover image.');
  }
};

export const WithoutImage = () => <PlaylistImageForm />;
export const WithImage = () => <PlaylistImageForm initialImage />;
export const Uploading = () => <PlaylistImageForm loading />;
export const UploadError = () => (
  <PlaylistImageForm error="The image could not be uploaded. Choose a JPEG, PNG or GIF file up to 5 MB and try again." />
);
export const Interactive = () => <PlaylistImageForm />;
