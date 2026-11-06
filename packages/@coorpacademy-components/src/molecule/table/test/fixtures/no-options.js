export default {
  props: {
    rows: [
      {
        fields: [
          'Michel',
          'Blabla',
          'michel@blabla.com',
          'Michel',
          'michelmichel',
          'michel@blabla.com'
        ],
        editHref: '#'
      },
      {
        fields: [
          'Michel',
          'BlablaBlabla',
          'michel@blabla.com',
          'Michel',
          'Blabla',
          'michel@blabla.com'
        ],
        editHref: '#'
      },
      {
        fields: [
          'michelmichel',
          'Blabla',
          'michel@blabla.com',
          'Michel',
          'Blabla',
          'michel@blabla.com'
        ],
        editHref: '#'
      },
      {
        fields: [
          'Michel',
          'Blabla',
          'michelmichel@blabla.com',
          'Michel',
          'Blabla',
          'michel@blabla.com'
        ],
        editHref: '#'
      },
      {
        fields: [
          'Michel',
          'Blabla',
          'michel@blabla.com',
          'Michel',
          'Blabla',
          'michelmichel@blablablabla.com'
        ],
        editHref: '#'
      }
    ],
    columns: [
      {
        title: 'Name',
        filtered: false
      },
      {
        title: 'Last name',
        filtered: true,
        options: [
          {
            title: 'All last names',
            onChange: () => {},
            selected: false
          },
          {
            title: 'Blabla',
            onChange: () => {},
            selected: true
          }
        ]
      },
      {
        title: 'Email',
        order: 'asc',
        onClick: () => {}
      },
      {
        title: 'Provider',
        filtered: false,
        options: [
          {
            title: 'All providers',
            onChange: () => {},
            selected: true
          },
          {
            title: 'Michel',
            onChange: () => {},
            selected: false
          },
          {
            title: 'Google',
            onChange: () => {},
            selected: false
          }
        ]
      },
      {
        title: 'Something',
        order: '',
        onClick: () => {}
      },
      {
        title: 'Something else',
        order: '',
        onClick: () => {}
      }
    ]
  }
};
