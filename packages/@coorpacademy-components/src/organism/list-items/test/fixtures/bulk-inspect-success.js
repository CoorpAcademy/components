const expandibleActionableTableProps = {
  columns: [{title: 'File name'}, {title: 'Status'}],
  rows: [
    {
      fields: [
        'Scorm1.zip',
        {
          icon: 'valid',
          componentType: 'status'
        }
      ]
    },
    {
      fields: [
        'Scorm2.zip',
        {
          icon: 'valid',
          componentType: 'status'
        }
      ]
    },
    {
      fields: [
        'Scorm3.zip',
        {
          icon: 'valid',
          componentType: 'status'
        }
      ]
    }
  ],
  columnWidth: '50%',
  ariaDescribedby: 'description-id',
  type: 'expandible-actionable-table'
};

export default {
  props: {
    title: `${expandibleActionableTableProps.rows.length} massive imports`,
    buttonLink: {
      type: 'primary',
      label: 'Import files',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    content: expandibleActionableTableProps
  }
};
