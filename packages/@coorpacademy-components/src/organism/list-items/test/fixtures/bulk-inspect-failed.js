const expandibleActionableTableProps = {
  columns: [
    {
      title: 'Name'
    },
    {
      title: 'Status'
    }
  ],
  rows: [
    {
      fields: [
        '12345_36766071-customer-experience-and-load-time.zip',
        {
          icon: 'invalid',
          componentType: 'status'
        }
      ],
      nestedRow: {
        columns: [
          {
            title: 'Error Type'
          },
          {
            title: 'Error Description'
          }
        ],
        rows: [
          {
            fields: ['Zip file', 'Zip file not found in CSV']
          }
        ],
        ariaDescribedBy: 'description-id',
        componentType: 'errors-table'
      },
      isRowExpandible: true
    }
  ],
  columnWidth: '50%',
  ariaDescribedBy: 'description-id',
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
