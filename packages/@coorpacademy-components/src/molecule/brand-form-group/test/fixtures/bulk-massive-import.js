export default {
  props: {
    title: 'Upload your content',
    subtitle: `<div style="font-family:Gilroy;line-height:1.5;width:100%"><div style="padding:16px;width:100%"><div style="display:flex;gap:40px;margin-bottom:16px;width:100%;align-items:flex-start"><div style="flex:1;min-width:0"><h5 style="margin:0 0 8px;color:#007bff;font-size:14px;font-weight:600">🗂️ ZIP Files</h5><p style="margin:0 0 8px;color:#555;font-size:14px">Upload your SCORM course packages as individual ZIP files</p><ul style="margin:0;padding-left:20px;color:#666;font-size:13px"><li>Each ZIP should contain <strong>one complete SCORM course</strong></li><li>Files should be at the root level (no nested folders)</li><li>If you have combined ZIPs, extract them first</li><li>Maximum size: <strong>50MB per file</strong></li></ul></div><div style="flex:1;min-width:0"><h5 style="margin:0 0 8px;color:#007bff;font-size:14px;font-weight:600">📑 CSV File</h5><p style="margin:0 0 8px;color:#555;font-size:14px">Create a spreadsheet with courses metadatas</p><ul style="margin:0;padding-left:20px;color:#666;font-size:13px"><li>Download our template below to get started</li><li>Fill in course titles, descriptions, tags, etc.</li><li>File format: <code style="background:#e9ecef;padding:2px 4px;border-radius:3px">.csv</code></li><li>Maximum size: <strong>5MB</strong></li></ul></div></div></div></div>`,
    subtitleSize: 'default',
    fields: [
      {
        title: 'Upload Content Files (ZIP)',
        type: 'bulkUpload',
        onChange: () => true,
        description:
          'ZIP archives containing your SCORM packages, images, videos, and documents (max 50MB each)',
        uploadLabel: 'Browse',
        disableHoverTooltip: true,
        buttonAriaLabel: 'Browse file to upload Bulk ZIP',
        filesTypes: 'application/zip',
        multiple: true,
        required: true,
        filesNumber: 1,
        onClick: () => console.log('See details clicked')
      },
      {
        uploadLabel: 'Browse',
        disableHoverTooltip: true,
        description: 'CSV',
        onChange: () => true,
        title: 'Upload CSV',
        type: 'bulkUpload',
        buttonAriaLabel: 'Browse file to upload CSV Bulk Metadata',
        labelButtonLink: 'here',
        labelLink: 'Need the template? Download it',
        hrefLink: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx'
      }
    ],
    fieldsLayout: 'bulkLayout'
  }
};
