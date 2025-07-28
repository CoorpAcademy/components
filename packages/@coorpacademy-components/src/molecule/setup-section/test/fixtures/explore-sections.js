// Fresh Content section
export const freshContentSection = {
  props: {
    id: 'fresh-content',
    title: 'New & Fresh Content',
    onUp: e => {
      console.log(e);
    },
    onDown: e => {
      console.log(e);
    },
    display: {
      value: true,
      onChange: value => console.log(value)
    }
  }
};

// Skills section
export const skillsSection = {
  props: {
    id: 'skills',
    title: 'Skills',
    onUp: e => {
      console.log(e);
    },
    onDown: e => {
      console.log(e);
    },
    display: {
      value: true,
      onChange: value => console.log(value)
    }
  }
};

// Playlist section
export const playlistSection = {
  props: {
    id: 'playlist',
    title: 'Playlists',
    onUp: e => {
      console.log(e);
    },
    onDown: e => {
      console.log(e);
    },
    display: {
      value: true,
      onChange: value => console.log(value)
    }
  }
};

// Certification section
export const certificationSection = {
  props: {
    id: 'certification',
    title: 'Certifications',
    onUp: e => {
      console.log(e);
    },
    onDown: e => {
      console.log(e);
    },
    display: {
      value: true,
      onChange: value => console.log(value)
    }
  }
};

export default {
  props: {
    sections: [
      freshContentSection.props,
      skillsSection.props,
      playlistSection.props,
      certificationSection.props
    ],
    onDrop: (dragged, dropped) => {
      console.log('Explore section reordered');
      console.log({dragged, dropped});
    }
  }
};
