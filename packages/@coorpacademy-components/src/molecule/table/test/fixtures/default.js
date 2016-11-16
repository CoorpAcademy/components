export default {
  props: {
    rows: [{
      fields: ['Michel', 'Blabla', 'michel@blabla.com', 'Michel', 'michelmichel', 'michel@blabla.com'],
      editHref: '#'
    },
    {
      fields: ['Michel', 'BlablaBlabla', 'michel@blabla.com', 'Michel', 'Blabla', 'michel@blabla.com'],
      editHref: '#'
    },
    {
      fields: ['michelmichel', 'Blabla', 'michel@blabla.com', 'Michel', 'Blabla', 'michel@blabla.com'],
      editHref: '#'
    },
    {
      fields: ['Michel', 'Blabla', 'michelmichel@blabla.com', 'Michel', 'Blabla', 'michel@blabla.com'],
      editHref: '#'
    },
    {
      fields: ['Michel', 'Blabla', 'michel@blabla.com', 'Michel', 'Blabla', 'michelmichel@blablablabla.com'],
      editHref: '#'
    }],
    columns: [{
      title: 'Name',
      filtered: false,
      options: [{
        title: 'Sort A -> Z',
        onChange: () => {},
        selected: false
      },
      {
        title: 'Sort Z -> A',
        onChange: () => {},
        selected: false
      }]
    },
    {
      title: 'Last name',
      filtered: false,
      options: [{
        title: 'Sort A -> Z',
        onChange: () => {},
        selected: false
      },
      {
        title: 'Sort Z -> A',
        onChange: () => {},
        selected: false
      }]
    },
    {
      title: 'Email',
      filtered: false,
      options: [{
        title: 'Sort A -> Z',
        onChange: () => {},
        selected: false
      },
      {
        title: 'Sort Z -> A',
        onChange: () => {},
        selected: false
      }]
    },
    {
      title: 'Provider',
      filtered: false,
      options: [{
        title: 'Sort A -> Z',
        onChange: () => {},
        selected: false
      },
      {
        title: 'Sort Z -> A',
        onChange: () => {},
        selected: false
      }]
    },
    {
      title: 'Something',
      filtered: false,
      options: [{
        title: 'Sort A -> Z',
        onChange: () => {},
        selected: false
      },
      {
        title: 'Sort Z -> A',
        onChange: () => {},
        selected: false
      }]
    },
    {
      title: 'Something else',
      filtered: false,
      options: [{
        title: 'Sort A -> Z',
        onChange: () => {},
        selected: false
      },
      {
        title: 'Sort Z -> A',
        onChange: () => {},
        selected: false
      }]
    }]
  }
};
