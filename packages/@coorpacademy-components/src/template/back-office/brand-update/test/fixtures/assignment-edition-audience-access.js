// Snapshot of the app-backoffice edition mapper with its English locales.
import {constant} from 'lodash/fp';
import shell from './assignment-edition-complete';

// CheckboxWithTitle hides its input when onChange is lodash noop.
const onAction = constant(undefined);

export const labels = {
  warning:
    "{{count}} content item isn't available to everyone in the current audience. Adding learners or populations can affect access to content. Remove this item from the assignment or adjust the audience before publishing.",
  warning_plural:
    "{{count}} content items aren't available to everyone in the current audience. Adding learners or populations can affect access to content. Remove these items from the assignment or adjust the audience before publishing.",
  header: '{{count}} content item unavailable',
  header_plural: '{{count}} content items unavailable',
  select: 'Select unavailable content ({{count}})',
  items: '{{count}} items',
  noneTitle: 'No modules added yet',
  noneDescription: 'Choose the modules learners should complete.'
};

const edition = {
  header: {
    type: 'header-with-actions',
    closeButton: {
      'aria-label': 'Close',
      onClick: onAction
    },
    title: 'Belgium onboarding',
    tags: [
      {
        status: 'draft',
        label: 'Draft'
      }
    ],
    saveStatus: {
      display: true,
      label: 'Unsaved changes'
    },
    warning: {
      label: '4 content items unavailable',
      disabled: false,
      onClick: onAction
    },
    actionButtons: [
      {
        type: 'secondary',
        label: 'Save as draft',
        disabled: false,
        onClick: onAction
      },
      {
        type: 'primary',
        label: 'Publish',
        disabled: true,
        onClick: onAction
      }
    ],
    bulletPointMenuButton: {
      disabled: false,
      buttonAriaLabel: 'More actions',
      buttons: []
    }
  },
  content: {
    type: 'assignment-edition',
    requiredFieldsHint:
      'Fields marked with * are required to **save a draft**. All fields are required to **publish**.',
    information: {
      id: 'title',
      title: 'Assignment title',
      subtitle: 'Only managers see this. It is never translated and never shown to learners.',
      field: {
        type: 'text',
        title: 'Title',
        required: true,
        hint: 'Enter a title of 3–100 characters.',
        theme: 'coorpmanager',
        value: 'Belgium onboarding',
        maxLength: 100,
        disabled: false,
        onChange: onAction
      },
      disabled: false
    },
    audience: {
      title: 'Audience',
      disabledExplanation:
        'Every learner of the platform is assigned. Unselect « All users » to pick an audience.',
      upload: {
        templatePreview: {
          header: 'login',
          rows: ['j.ortega', 'a.weber']
        },
        title: 'Upload a list of learners',
        subtitle:
          'One login column. xlsx, xls or csv, up to 5000 rows. Logins for accounts not found or deactivated are reported before you save.',
        templateLink: {
          label: 'Download template',
          href: 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,UEsDBBQAAAAAAAAAAACkAYS4tQIAALUCAAAaAAAAeGwvX3JlbHMvd29ya2Jvb2sueG1sLnJlbHM8P3htbCB2ZXJzaW9uPSIxLjAiIGVuY29kaW5nPSJVVEYtOCIgc3RhbmRhbG9uZT0ieWVzIj8+DQo8UmVsYXRpb25zaGlwcyB4bWxucz0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzIj48UmVsYXRpb25zaGlwIElkPSJySWQxIiBUeXBlPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL3dvcmtzaGVldCIgVGFyZ2V0PSJ3b3Jrc2hlZXRzL3NoZWV0MS54bWwiLz48UmVsYXRpb25zaGlwIElkPSJySWQyIiBUeXBlPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL3RoZW1lIiBUYXJnZXQ9InRoZW1lL3RoZW1lMS54bWwiLz48UmVsYXRpb25zaGlwIElkPSJySWQzIiBUeXBlPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL3N0eWxlcyIgVGFyZ2V0PSJzdHlsZXMueG1sIi8+PFJlbGF0aW9uc2hpcCBJZD0icklkNCIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9zaGVldE1ldGFkYXRhIiBUYXJnZXQ9Im1ldGFkYXRhLnhtbCIvPjwvUmVsYXRpb25zaGlwcz5QSwMEFAAAAAAAAAAAADAPiGveHQAA3h0AABMAAAB4bC90aGVtZS90aGVtZTEueG1sPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPGE6dGhlbWUgeG1sbnM6YT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL2RyYXdpbmdtbC8yMDA2L21haW4iIG5hbWU9Ik9mZmljZSBUaGVtZSI+PGE6dGhlbWVFbGVtZW50cz48YTpjbHJTY2hlbWUgbmFtZT0iT2ZmaWNlIj48YTpkazE+PGE6c3lzQ2xyIHZhbD0id2luZG93VGV4dCIgbGFzdENscj0iMDAwMDAwIi8+PC9hOmRrMT48YTpsdDE+PGE6c3lzQ2xyIHZhbD0id2luZG93IiBsYXN0Q2xyPSJGRkZGRkYiLz48L2E6bHQxPjxhOmRrMj48YTpzcmdiQ2xyIHZhbD0iMUY0OTdEIi8+PC9hOmRrMj48YTpsdDI+PGE6c3JnYkNsciB2YWw9IkVFRUNFMSIvPjwvYTpsdDI+PGE6YWNjZW50MT48YTpzcmdiQ2xyIHZhbD0iNEY4MUJEIi8+PC9hOmFjY2VudDE+PGE6YWNjZW50Mj48YTpzcmdiQ2xyIHZhbD0iQzA1MDREIi8+PC9hOmFjY2VudDI+PGE6YWNjZW50Mz48YTpzcmdiQ2xyIHZhbD0iOUJCQjU5Ii8+PC9hOmFjY2VudDM+PGE6YWNjZW50ND48YTpzcmdiQ2xyIHZhbD0iODA2NEEyIi8+PC9hOmFjY2VudDQ+PGE6YWNjZW50NT48YTpzcmdiQ2xyIHZhbD0iNEJBQ0M2Ii8+PC9hOmFjY2VudDU+PGE6YWNjZW50Nj48YTpzcmdiQ2xyIHZhbD0iRjc5NjQ2Ii8+PC9hOmFjY2VudDY+PGE6aGxpbms+PGE6c3JnYkNsciB2YWw9IjAwMDBGRiIvPjwvYTpobGluaz48YTpmb2xIbGluaz48YTpzcmdiQ2xyIHZhbD0iODAwMDgwIi8+PC9hOmZvbEhsaW5rPjwvYTpjbHJTY2hlbWU+PGE6Zm9udFNjaGVtZSBuYW1lPSJPZmZpY2UiPjxhOm1ham9yRm9udD48YTpsYXRpbiB0eXBlZmFjZT0iQ2FtYnJpYSIvPjxhOmVhIHR5cGVmYWNlPSIiLz48YTpjcyB0eXBlZmFjZT0iIi8+PGE6Zm9udCBzY3JpcHQ9IkpwYW4iIHR5cGVmYWNlPSLvvK3vvLMg77yw44K044K344OD44KvIi8+PGE6Zm9udCBzY3JpcHQ9IkhhbmciIHR5cGVmYWNlPSLrp5HsnYAg6rOg65SVIi8+PGE6Zm9udCBzY3JpcHQ9IkhhbnMiIHR5cGVmYWNlPSLlrovkvZMiLz48YTpmb250IHNjcmlwdD0iSGFudCIgdHlwZWZhY2U9IuaWsOe0sOaYjumrlCIvPjxhOmZvbnQgc2NyaXB0PSJBcmFiIiB0eXBlZmFjZT0iVGltZXMgTmV3IFJvbWFuIi8+PGE6Zm9udCBzY3JpcHQ9IkhlYnIiIHR5cGVmYWNlPSJUaW1lcyBOZXcgUm9tYW4iLz48YTpmb250IHNjcmlwdD0iVGhhaSIgdHlwZWZhY2U9IlRhaG9tYSIvPjxhOmZvbnQgc2NyaXB0PSJFdGhpIiB0eXBlZmFjZT0iTnlhbGEiLz48YTpmb250IHNjcmlwdD0iQmVuZyIgdHlwZWZhY2U9IlZyaW5kYSIvPjxhOmZvbnQgc2NyaXB0PSJHdWpyIiB0eXBlZmFjZT0iU2hydXRpIi8+PGE6Zm9udCBzY3JpcHQ9IktobXIiIHR5cGVmYWNlPSJNb29sQm9yYW4iLz48YTpmb250IHNjcmlwdD0iS25kYSIgdHlwZWZhY2U9IlR1bmdhIi8+PGE6Zm9udCBzY3JpcHQ9Ikd1cnUiIHR5cGVmYWNlPSJSYWF2aSIvPjxhOmZvbnQgc2NyaXB0PSJDYW5zIiB0eXBlZmFjZT0iRXVwaGVtaWEiLz48YTpmb250IHNjcmlwdD0iQ2hlciIgdHlwZWZhY2U9IlBsYW50YWdlbmV0IENoZXJva2VlIi8+PGE6Zm9udCBzY3JpcHQ9IllpaWkiIHR5cGVmYWNlPSJNaWNyb3NvZnQgWWkgQmFpdGkiLz48YTpmb250IHNjcmlwdD0iVGlidCIgdHlwZWZhY2U9Ik1pY3Jvc29mdCBIaW1hbGF5YSIvPjxhOmZvbnQgc2NyaXB0PSJUaGFhIiB0eXBlZmFjZT0iTVYgQm9saSIvPjxhOmZvbnQgc2NyaXB0PSJEZXZhIiB0eXBlZmFjZT0iTWFuZ2FsIi8+PGE6Zm9udCBzY3JpcHQ9IlRlbHUiIHR5cGVmYWNlPSJHYXV0YW1pIi8+PGE6Zm9udCBzY3JpcHQ9IlRhbWwiIHR5cGVmYWNlPSJMYXRoYSIvPjxhOmZvbnQgc2NyaXB0PSJTeXJjIiB0eXBlZmFjZT0iRXN0cmFuZ2VsbyBFZGVzc2EiLz48YTpmb250IHNjcmlwdD0iT3J5YSIgdHlwZWZhY2U9IkthbGluZ2EiLz48YTpmb250IHNjcmlwdD0iTWx5bSIgdHlwZWZhY2U9IkthcnRpa2EiLz48YTpmb250IHNjcmlwdD0iTGFvbyIgdHlwZWZhY2U9IkRva0NoYW1wYSIvPjxhOmZvbnQgc2NyaXB0PSJTaW5oIiB0eXBlZmFjZT0iSXNrb29sYSBQb3RhIi8+PGE6Zm9udCBzY3JpcHQ9Ik1vbmciIHR5cGVmYWNlPSJNb25nb2xpYW4gQmFpdGkiLz48YTpmb250IHNjcmlwdD0iVmlldCIgdHlwZWZhY2U9IlRpbWVzIE5ldyBSb21hbiIvPjxhOmZvbnQgc2NyaXB0PSJVaWdoIiB0eXBlZmFjZT0iTWljcm9zb2Z0IFVpZ2h1ciIvPjxhOmZvbnQgc2NyaXB0PSJHZW9yIiB0eXBlZmFjZT0iU3lsZmFlbiIvPjwvYTptYWpvckZvbnQ+PGE6bWlub3JGb250PjxhOmxhdGluIHR5cGVmYWNlPSJDYWxpYnJpIi8+PGE6ZWEgdHlwZWZhY2U9IiIvPjxhOmNzIHR5cGVmYWNlPSIiLz48YTpmb250IHNjcmlwdD0iSnBhbiIgdHlwZWZhY2U9Iu+8re+8syDvvLDjgrTjgrfjg4Pjgq8iLz48YTpmb250IHNjcmlwdD0iSGFuZyIgdHlwZWZhY2U9IuunkeydgCDqs6DrlJUiLz48YTpmb250IHNjcmlwdD0iSGFucyIgdHlwZWZhY2U9IuWui+S9kyIvPjxhOmZvbnQgc2NyaXB0PSJIYW50IiB0eXBlZmFjZT0i5paw57Sw5piO6auUIi8+PGE6Zm9udCBzY3JpcHQ9IkFyYWIiIHR5cGVmYWNlPSJBcmlhbCIvPjxhOmZvbnQgc2NyaXB0PSJIZWJyIiB0eXBlZmFjZT0iQXJpYWwiLz48YTpmb250IHNjcmlwdD0iVGhhaSIgdHlwZWZhY2U9IlRhaG9tYSIvPjxhOmZvbnQgc2NyaXB0PSJFdGhpIiB0eXBlZmFjZT0iTnlhbGEiLz48YTpmb250IHNjcmlwdD0iQmVuZyIgdHlwZWZhY2U9IlZyaW5kYSIvPjxhOmZvbnQgc2NyaXB0PSJHdWpyIiB0eXBlZmFjZT0iU2hydXRpIi8+PGE6Zm9udCBzY3JpcHQ9IktobXIiIHR5cGVmYWNlPSJEYXVuUGVuaCIvPjxhOmZvbnQgc2NyaXB0PSJLbmRhIiB0eXBlZmFjZT0iVHVuZ2EiLz48YTpmb250IHNjcmlwdD0iR3VydSIgdHlwZWZhY2U9IlJhYXZpIi8+PGE6Zm9udCBzY3JpcHQ9IkNhbnMiIHR5cGVmYWNlPSJFdXBoZW1pYSIvPjxhOmZvbnQgc2NyaXB0PSJDaGVyIiB0eXBlZmFjZT0iUGxhbnRhZ2VuZXQgQ2hlcm9rZWUiLz48YTpmb250IHNjcmlwdD0iWWlpaSIgdHlwZWZhY2U9Ik1pY3Jvc29mdCBZaSBCYWl0aSIvPjxhOmZvbnQgc2NyaXB0PSJUaWJ0IiB0eXBlZmFjZT0iTWljcm9zb2Z0IEhpbWFsYXlhIi8+PGE6Zm9udCBzY3JpcHQ9IlRoYWEiIHR5cGVmYWNlPSJNViBCb2xpIi8+PGE6Zm9udCBzY3JpcHQ9IkRldmEiIHR5cGVmYWNlPSJNYW5nYWwiLz48YTpmb250IHNjcmlwdD0iVGVsdSIgdHlwZWZhY2U9IkdhdXRhbWkiLz48YTpmb250IHNjcmlwdD0iVGFtbCIgdHlwZWZhY2U9IkxhdGhhIi8+PGE6Zm9udCBzY3JpcHQ9IlN5cmMiIHR5cGVmYWNlPSJFc3RyYW5nZWxvIEVkZXNzYSIvPjxhOmZvbnQgc2NyaXB0PSJPcnlhIiB0eXBlZmFjZT0iS2FsaW5nYSIvPjxhOmZvbnQgc2NyaXB0PSJNbHltIiB0eXBlZmFjZT0iS2FydGlrYSIvPjxhOmZvbnQgc2NyaXB0PSJMYW9vIiB0eXBlZmFjZT0iRG9rQ2hhbXBhIi8+PGE6Zm9udCBzY3JpcHQ9IlNpbmgiIHR5cGVmYWNlPSJJc2tvb2xhIFBvdGEiLz48YTpmb250IHNjcmlwdD0iTW9uZyIgdHlwZWZhY2U9Ik1vbmdvbGlhbiBCYWl0aSIvPjxhOmZvbnQgc2NyaXB0PSJWaWV0IiB0eXBlZmFjZT0iQXJpYWwiLz48YTpmb250IHNjcmlwdD0iVWlnaCIgdHlwZWZhY2U9Ik1pY3Jvc29mdCBVaWdodXIiLz48YTpmb250IHNjcmlwdD0iR2VvciIgdHlwZWZhY2U9IlN5bGZhZW4iLz48L2E6bWlub3JGb250PjwvYTpmb250U2NoZW1lPjxhOmZtdFNjaGVtZSBuYW1lPSJPZmZpY2UiPjxhOmZpbGxTdHlsZUxzdD48YTpzb2xpZEZpbGw+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiLz48L2E6c29saWRGaWxsPjxhOmdyYWRGaWxsIHJvdFdpdGhTaGFwZT0iMSI+PGE6Z3NMc3Q+PGE6Z3MgcG9zPSIwIj48YTpzY2hlbWVDbHIgdmFsPSJwaENsciI+PGE6dGludCB2YWw9IjUwMDAwIi8+PGE6c2F0TW9kIHZhbD0iMzAwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PGE6Z3MgcG9zPSIzNTAwMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnRpbnQgdmFsPSIzNzAwMCIvPjxhOnNhdE1vZCB2YWw9IjMwMDAwMCIvPjwvYTpzY2hlbWVDbHI+PC9hOmdzPjxhOmdzIHBvcz0iMTAwMDAwIj48YTpzY2hlbWVDbHIgdmFsPSJwaENsciI+PGE6dGludCB2YWw9IjE1MDAwIi8+PGE6c2F0TW9kIHZhbD0iMzUwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PC9hOmdzTHN0PjxhOmxpbiBhbmc9IjE2MjAwMDAwIiBzY2FsZWQ9IjEiLz48L2E6Z3JhZEZpbGw+PGE6Z3JhZEZpbGwgcm90V2l0aFNoYXBlPSIxIj48YTpnc0xzdD48YTpncyBwb3M9IjAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTp0aW50IHZhbD0iMTAwMDAwIi8+PGE6c2hhZGUgdmFsPSIxMDAwMDAiLz48YTpzYXRNb2QgdmFsPSIxMzAwMDAiLz48L2E6c2NoZW1lQ2xyPjwvYTpncz48YTpncyBwb3M9IjEwMDAwMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnRpbnQgdmFsPSI1MDAwMCIvPjxhOnNoYWRlIHZhbD0iMTAwMDAwIi8+PGE6c2F0TW9kIHZhbD0iMzUwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PC9hOmdzTHN0PjxhOmxpbiBhbmc9IjE2MjAwMDAwIiBzY2FsZWQ9IjAiLz48L2E6Z3JhZEZpbGw+PC9hOmZpbGxTdHlsZUxzdD48YTpsblN0eWxlTHN0PjxhOmxuIHc9Ijk1MjUiIGNhcD0iZmxhdCIgY21wZD0ic25nIiBhbGduPSJjdHIiPjxhOnNvbGlkRmlsbD48YTpzY2hlbWVDbHIgdmFsPSJwaENsciI+PGE6c2hhZGUgdmFsPSI5NTAwMCIvPjxhOnNhdE1vZCB2YWw9IjEwNTAwMCIvPjwvYTpzY2hlbWVDbHI+PC9hOnNvbGlkRmlsbD48YTpwcnN0RGFzaCB2YWw9InNvbGlkIi8+PC9hOmxuPjxhOmxuIHc9IjI1NDAwIiBjYXA9ImZsYXQiIGNtcGQ9InNuZyIgYWxnbj0iY3RyIj48YTpzb2xpZEZpbGw+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiLz48L2E6c29saWRGaWxsPjxhOnByc3REYXNoIHZhbD0ic29saWQiLz48L2E6bG4+PGE6bG4gdz0iMzgxMDAiIGNhcD0iZmxhdCIgY21wZD0ic25nIiBhbGduPSJjdHIiPjxhOnNvbGlkRmlsbD48YTpzY2hlbWVDbHIgdmFsPSJwaENsciIvPjwvYTpzb2xpZEZpbGw+PGE6cHJzdERhc2ggdmFsPSJzb2xpZCIvPjwvYTpsbj48L2E6bG5TdHlsZUxzdD48YTplZmZlY3RTdHlsZUxzdD48YTplZmZlY3RTdHlsZT48YTplZmZlY3RMc3Q+PGE6b3V0ZXJTaGR3IGJsdXJSYWQ9IjQwMDAwIiBkaXN0PSIyMDAwMCIgZGlyPSI1NDAwMDAwIiByb3RXaXRoU2hhcGU9IjAiPjxhOnNyZ2JDbHIgdmFsPSIwMDAwMDAiPjxhOmFscGhhIHZhbD0iMzgwMDAiLz48L2E6c3JnYkNscj48L2E6b3V0ZXJTaGR3PjwvYTplZmZlY3RMc3Q+PC9hOmVmZmVjdFN0eWxlPjxhOmVmZmVjdFN0eWxlPjxhOmVmZmVjdExzdD48YTpvdXRlclNoZHcgYmx1clJhZD0iNDAwMDAiIGRpc3Q9IjIzMDAwIiBkaXI9IjU0MDAwMDAiIHJvdFdpdGhTaGFwZT0iMCI+PGE6c3JnYkNsciB2YWw9IjAwMDAwMCI+PGE6YWxwaGEgdmFsPSIzNTAwMCIvPjwvYTpzcmdiQ2xyPjwvYTpvdXRlclNoZHc+PC9hOmVmZmVjdExzdD48L2E6ZWZmZWN0U3R5bGU+PGE6ZWZmZWN0U3R5bGU+PGE6ZWZmZWN0THN0PjxhOm91dGVyU2hkdyBibHVyUmFkPSI0MDAwMCIgZGlzdD0iMjMwMDAiIGRpcj0iNTQwMDAwMCIgcm90V2l0aFNoYXBlPSIwIj48YTpzcmdiQ2xyIHZhbD0iMDAwMDAwIj48YTphbHBoYSB2YWw9IjM1MDAwIi8+PC9hOnNyZ2JDbHI+PC9hOm91dGVyU2hkdz48L2E6ZWZmZWN0THN0PjxhOnNjZW5lM2Q+PGE6Y2FtZXJhIHByc3Q9Im9ydGhvZ3JhcGhpY0Zyb250Ij48YTpyb3QgbGF0PSIwIiBsb249IjAiIHJldj0iMCIvPjwvYTpjYW1lcmE+PGE6bGlnaHRSaWcgcmlnPSJ0aHJlZVB0IiBkaXI9InQiPjxhOnJvdCBsYXQ9IjAiIGxvbj0iMCIgcmV2PSIxMjAwMDAwIi8+PC9hOmxpZ2h0UmlnPjwvYTpzY2VuZTNkPjxhOnNwM2Q+PGE6YmV2ZWxUIHc9IjYzNTAwIiBoPSIyNTQwMCIvPjwvYTpzcDNkPjwvYTplZmZlY3RTdHlsZT48L2E6ZWZmZWN0U3R5bGVMc3Q+PGE6YmdGaWxsU3R5bGVMc3Q+PGE6c29saWRGaWxsPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIi8+PC9hOnNvbGlkRmlsbD48YTpncmFkRmlsbCByb3RXaXRoU2hhcGU9IjEiPjxhOmdzTHN0PjxhOmdzIHBvcz0iMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnRpbnQgdmFsPSI0MDAwMCIvPjxhOnNhdE1vZCB2YWw9IjM1MDAwMCIvPjwvYTpzY2hlbWVDbHI+PC9hOmdzPjxhOmdzIHBvcz0iNDAwMDAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTp0aW50IHZhbD0iNDUwMDAiLz48YTpzaGFkZSB2YWw9Ijk5MDAwIi8+PGE6c2F0TW9kIHZhbD0iMzUwMDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PGE6Z3MgcG9zPSIxMDAwMDAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTpzaGFkZSB2YWw9IjIwMDAwIi8+PGE6c2F0TW9kIHZhbD0iMjU1MDAwIi8+PC9hOnNjaGVtZUNscj48L2E6Z3M+PC9hOmdzTHN0PjxhOnBhdGggcGF0aD0iY2lyY2xlIj48YTpmaWxsVG9SZWN0IGw9IjUwMDAwIiB0PSItODAwMDAiIHI9IjUwMDAwIiBiPSIxODAwMDAiLz48L2E6cGF0aD48L2E6Z3JhZEZpbGw+PGE6Z3JhZEZpbGwgcm90V2l0aFNoYXBlPSIxIj48YTpnc0xzdD48YTpncyBwb3M9IjAiPjxhOnNjaGVtZUNsciB2YWw9InBoQ2xyIj48YTp0aW50IHZhbD0iODAwMDAiLz48YTpzYXRNb2QgdmFsPSIzMDAwMDAiLz48L2E6c2NoZW1lQ2xyPjwvYTpncz48YTpncyBwb3M9IjEwMDAwMCI+PGE6c2NoZW1lQ2xyIHZhbD0icGhDbHIiPjxhOnNoYWRlIHZhbD0iMzAwMDAiLz48YTpzYXRNb2QgdmFsPSIyMDAwMDAiLz48L2E6c2NoZW1lQ2xyPjwvYTpncz48L2E6Z3NMc3Q+PGE6cGF0aCBwYXRoPSJjaXJjbGUiPjxhOmZpbGxUb1JlY3QgbD0iNTAwMDAiIHQ9IjUwMDAwIiByPSI1MDAwMCIgYj0iNTAwMDAiLz48L2E6cGF0aD48L2E6Z3JhZEZpbGw+PC9hOmJnRmlsbFN0eWxlTHN0PjwvYTpmbXRTY2hlbWU+PC9hOnRoZW1lRWxlbWVudHM+PGE6b2JqZWN0RGVmYXVsdHM+PGE6c3BEZWY+PGE6c3BQci8+PGE6Ym9keVByLz48YTpsc3RTdHlsZS8+PGE6c3R5bGU+PGE6bG5SZWYgaWR4PSIxIj48YTpzY2hlbWVDbHIgdmFsPSJhY2NlbnQxIi8+PC9hOmxuUmVmPjxhOmZpbGxSZWYgaWR4PSIzIj48YTpzY2hlbWVDbHIgdmFsPSJhY2NlbnQxIi8+PC9hOmZpbGxSZWY+PGE6ZWZmZWN0UmVmIGlkeD0iMiI+PGE6c2NoZW1lQ2xyIHZhbD0iYWNjZW50MSIvPjwvYTplZmZlY3RSZWY+PGE6Zm9udFJlZiBpZHg9Im1pbm9yIj48YTpzY2hlbWVDbHIgdmFsPSJsdDEiLz48L2E6Zm9udFJlZj48L2E6c3R5bGU+PC9hOnNwRGVmPjxhOmxuRGVmPjxhOnNwUHIvPjxhOmJvZHlQci8+PGE6bHN0U3R5bGUvPjxhOnN0eWxlPjxhOmxuUmVmIGlkeD0iMiI+PGE6c2NoZW1lQ2xyIHZhbD0iYWNjZW50MSIvPjwvYTpsblJlZj48YTpmaWxsUmVmIGlkeD0iMCI+PGE6c2NoZW1lQ2xyIHZhbD0iYWNjZW50MSIvPjwvYTpmaWxsUmVmPjxhOmVmZmVjdFJlZiBpZHg9IjEiPjxhOnNjaGVtZUNsciB2YWw9ImFjY2VudDEiLz48L2E6ZWZmZWN0UmVmPjxhOmZvbnRSZWYgaWR4PSJtaW5vciI+PGE6c2NoZW1lQ2xyIHZhbD0idHgxIi8+PC9hOmZvbnRSZWY+PC9hOnN0eWxlPjwvYTpsbkRlZj48L2E6b2JqZWN0RGVmYXVsdHM+PGE6ZXh0cmFDbHJTY2hlbWVMc3QvPjwvYTp0aGVtZT5QSwMEFAAAAAAAAAAAAFX0BJRaBAAAWgQAAA0AAAB4bC9zdHlsZXMueG1sPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPHN0eWxlU2hlZXQgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9zcHJlYWRzaGVldG1sLzIwMDYvbWFpbiIgeG1sbnM6dnQ9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L2RvY1Byb3BzVlR5cGVzIj48bnVtRm10cyBjb3VudD0iMSI+PG51bUZtdCBudW1GbXRJZD0iNTYiIGZvcm1hdENvZGU9IiZxdW90O+S4iuWNiC/kuIvljYggJnF1b3Q7aGgmcXVvdDvmmYImcXVvdDttbSZxdW90O+WIhiZxdW90O3NzJnF1b3Q756eSICZxdW90OyIvPjwvbnVtRm10cz48Zm9udHMgY291bnQ9IjEiPjxmb250PjxzeiB2YWw9IjEyIi8+PGNvbG9yIHRoZW1lPSIxIi8+PG5hbWUgdmFsPSJDYWxpYnJpIi8+PGZhbWlseSB2YWw9IjIiLz48c2NoZW1lIHZhbD0ibWlub3IiLz48L2ZvbnQ+PC9mb250cz48ZmlsbHMgY291bnQ9IjIiPjxmaWxsPjxwYXR0ZXJuRmlsbCBwYXR0ZXJuVHlwZT0ibm9uZSIvPjwvZmlsbD48ZmlsbD48cGF0dGVybkZpbGwgcGF0dGVyblR5cGU9ImdyYXkxMjUiLz48L2ZpbGw+PC9maWxscz48Ym9yZGVycyBjb3VudD0iMSI+PGJvcmRlcj48bGVmdC8+PHJpZ2h0Lz48dG9wLz48Ym90dG9tLz48ZGlhZ29uYWwvPjwvYm9yZGVyPjwvYm9yZGVycz48Y2VsbFN0eWxlWGZzIGNvdW50PSIxIj48eGYgbnVtRm10SWQ9IjAiIGZvbnRJZD0iMCIgZmlsbElkPSIwIiBib3JkZXJJZD0iMCIvPjwvY2VsbFN0eWxlWGZzPjxjZWxsWGZzIGNvdW50PSIxIj48eGYgbnVtRm10SWQ9IjAiIGZvbnRJZD0iMCIgZmlsbElkPSIwIiBib3JkZXJJZD0iMCIgeGZJZD0iMCIgYXBwbHlOdW1iZXJGb3JtYXQ9IjEiLz48L2NlbGxYZnM+PGNlbGxTdHlsZXMgY291bnQ9IjEiPjxjZWxsU3R5bGUgbmFtZT0iTm9ybWFsIiB4ZklkPSIwIiBidWlsdGluSWQ9IjAiLz48L2NlbGxTdHlsZXM+PGR4ZnMgY291bnQ9IjAiLz48dGFibGVTdHlsZXMgY291bnQ9IjAiIGRlZmF1bHRUYWJsZVN0eWxlPSJUYWJsZVN0eWxlTWVkaXVtOSIgZGVmYXVsdFBpdm90U3R5bGU9IlBpdm90U3R5bGVNZWRpdW00Ii8+PC9zdHlsZVNoZWV0PlBLAwQUAAAAAAAAAAAAJgqowTgCAAA4AgAAGAAAAHhsL3dvcmtzaGVldHMvc2hlZXQxLnhtbDw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9IlVURi04IiBzdGFuZGFsb25lPSJ5ZXMiPz4NCjx3b3Jrc2hlZXQgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9zcHJlYWRzaGVldG1sLzIwMDYvbWFpbiIgeG1sbnM6cj0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcyI+PGRpbWVuc2lvbiByZWY9IkExOkEzIi8+PHNoZWV0Vmlld3M+PHNoZWV0VmlldyB3b3JrYm9va1ZpZXdJZD0iMCIvPjwvc2hlZXRWaWV3cz48c2hlZXREYXRhPjxyb3cgcj0iMSI+PGMgcj0iQTEiIHQ9InN0ciI+PHY+bG9naW48L3Y+PC9jPjwvcm93Pjxyb3cgcj0iMiI+PGMgcj0iQTIiIHQ9InN0ciI+PHY+ai5vcnRlZ2E8L3Y+PC9jPjwvcm93Pjxyb3cgcj0iMyI+PGMgcj0iQTMiIHQ9InN0ciI+PHY+YS53ZWJlcjwvdj48L2M+PC9yb3c+PC9zaGVldERhdGE+PGlnbm9yZWRFcnJvcnM+PGlnbm9yZWRFcnJvciBudW1iZXJTdG9yZWRBc1RleHQ9IjEiIHNxcmVmPSJBMTpBMyIvPjwvaWdub3JlZEVycm9ycz48L3dvcmtzaGVldD5QSwMEFAAAAAAAAAAAAGCAAIGIAwAAiAMAAA8AAAB4bC9tZXRhZGF0YS54bWw8P3htbCB2ZXJzaW9uPSIxLjAiIGVuY29kaW5nPSJVVEYtOCIgc3RhbmRhbG9uZT0ieWVzIj8+DQo8bWV0YWRhdGEgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9zcHJlYWRzaGVldG1sLzIwMDYvbWFpbiIgeG1sbnM6eGxyZD0iaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS9vZmZpY2Uvc3ByZWFkc2hlZXRtbC8yMDE3L3JpY2hkYXRhIiB4bWxuczp4ZGE9Imh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vb2ZmaWNlL3NwcmVhZHNoZWV0bWwvMjAxNy9keW5hbWljYXJyYXkiPgogIDxtZXRhZGF0YVR5cGVzIGNvdW50PSIxIj4KICAgIDxtZXRhZGF0YVR5cGUgbmFtZT0iWExEQVBSIiBtaW5TdXBwb3J0ZWRWZXJzaW9uPSIxMjAwMDAiIGNvcHk9IjEiIHBhc3RlQWxsPSIxIiBwYXN0ZVZhbHVlcz0iMSIgbWVyZ2U9IjEiIHNwbGl0Rmlyc3Q9IjEiIHJvd0NvbFNoaWZ0PSIxIiBjbGVhckZvcm1hdHM9IjEiIGNsZWFyQ29tbWVudHM9IjEiIGFzc2lnbj0iMSIgY29lcmNlPSIxIiBjZWxsTWV0YT0iMSIvPgogIDwvbWV0YWRhdGFUeXBlcz4KICA8ZnV0dXJlTWV0YWRhdGEgbmFtZT0iWExEQVBSIiBjb3VudD0iMSI+CiAgICA8Yms+CiAgICAgIDxleHRMc3Q+CiAgICAgICAgPGV4dCB1cmk9IntiZGJiOGNkYy1mYTFlLTQ5NmUtYTg1Ny0zYzNmMzBjMDI5YzN9Ij4KICAgICAgICAgIDx4ZGE6ZHluYW1pY0FycmF5UHJvcGVydGllcyBmRHluYW1pYz0iMSIgZkNvbGxhcHNlZD0iMCIvPgogICAgICAgIDwvZXh0PgogICAgICA8L2V4dExzdD4KICAgIDwvYms+CiAgPC9mdXR1cmVNZXRhZGF0YT4KICA8Y2VsbE1ldGFkYXRhIGNvdW50PSIxIj4KICAgIDxiaz4KICAgICAgPHJjIHQ9IjEiIHY9IjAiLz4KICAgIDwvYms+CiAgPC9jZWxsTWV0YWRhdGE+CjwvbWV0YWRhdGE+UEsDBBQAAAAAAAAAAADb2JAORAEAAEQBAAAPAAAAeGwvd29ya2Jvb2sueG1sPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPHdvcmtib29rIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvc3ByZWFkc2hlZXRtbC8yMDA2L21haW4iIHhtbG5zOnI9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L3JlbGF0aW9uc2hpcHMiPjx3b3JrYm9va1ByIGNvZGVOYW1lPSJUaGlzV29ya2Jvb2siLz48c2hlZXRzPjxzaGVldCBuYW1lPSJsZWFybmVycyIgc2hlZXRJZD0iMSIgcjppZD0icklkMSIvPjwvc2hlZXRzPjwvd29ya2Jvb2s+UEsDBBQAAAAAAAAAAABKahH5TAIAAEwCAAALAAAAX3JlbHMvLnJlbHM8P3htbCB2ZXJzaW9uPSIxLjAiIGVuY29kaW5nPSJVVEYtOCIgc3RhbmRhbG9uZT0ieWVzIj8+DQo8UmVsYXRpb25zaGlwcyB4bWxucz0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9yZWxhdGlvbnNoaXBzIj48UmVsYXRpb25zaGlwIElkPSJySWQyIiBUeXBlPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvcGFja2FnZS8yMDA2L3JlbGF0aW9uc2hpcHMvbWV0YWRhdGEvY29yZS1wcm9wZXJ0aWVzIiBUYXJnZXQ9ImRvY1Byb3BzL2NvcmUueG1sIi8+PFJlbGF0aW9uc2hpcCBJZD0icklkMyIgVHlwZT0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL29mZmljZURvY3VtZW50LzIwMDYvcmVsYXRpb25zaGlwcy9leHRlbmRlZC1wcm9wZXJ0aWVzIiBUYXJnZXQ9ImRvY1Byb3BzL2FwcC54bWwiLz48UmVsYXRpb25zaGlwIElkPSJySWQxIiBUeXBlPSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9yZWxhdGlvbnNoaXBzL29mZmljZURvY3VtZW50IiBUYXJnZXQ9InhsL3dvcmtib29rLnhtbCIvPjwvUmVsYXRpb25zaGlwcz5QSwMEFAAAAAAAAAAAAAaeJBQ0AgAANAIAABAAAABkb2NQcm9wcy9hcHAueG1sPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pg0KPFByb3BlcnRpZXMgeG1sbnM9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9vZmZpY2VEb2N1bWVudC8yMDA2L2V4dGVuZGVkLXByb3BlcnRpZXMiIHhtbG5zOnZ0PSJodHRwOi8vc2NoZW1hcy5vcGVueG1sZm9ybWF0cy5vcmcvb2ZmaWNlRG9jdW1lbnQvMjAwNi9kb2NQcm9wc1ZUeXBlcyI+PEFwcGxpY2F0aW9uPlNoZWV0SlM8L0FwcGxpY2F0aW9uPjxIZWFkaW5nUGFpcnM+PHZ0OnZlY3RvciBzaXplPSIyIiBiYXNlVHlwZT0idmFyaWFudCI+PHZ0OnZhcmlhbnQ+PHZ0Omxwc3RyPldvcmtzaGVldHM8L3Z0Omxwc3RyPjwvdnQ6dmFyaWFudD48dnQ6dmFyaWFudD48dnQ6aTQ+MTwvdnQ6aTQ+PC92dDp2YXJpYW50PjwvdnQ6dmVjdG9yPjwvSGVhZGluZ1BhaXJzPjxUaXRsZXNPZlBhcnRzPjx2dDp2ZWN0b3Igc2l6ZT0iMSIgYmFzZVR5cGU9Imxwc3RyIj48dnQ6bHBzdHI+bGVhcm5lcnM8L3Z0Omxwc3RyPjwvdnQ6dmVjdG9yPjwvVGl0bGVzT2ZQYXJ0cz48L1Byb3BlcnRpZXM+UEsDBBQAAAAAAAAAAADWknwRWgEAAFoBAAARAAAAZG9jUHJvcHMvY29yZS54bWw8P3htbCB2ZXJzaW9uPSIxLjAiIGVuY29kaW5nPSJVVEYtOCIgc3RhbmRhbG9uZT0ieWVzIj8+DQo8Y3A6Y29yZVByb3BlcnRpZXMgeG1sbnM6Y3A9Imh0dHA6Ly9zY2hlbWFzLm9wZW54bWxmb3JtYXRzLm9yZy9wYWNrYWdlLzIwMDYvbWV0YWRhdGEvY29yZS1wcm9wZXJ0aWVzIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmRjdGVybXM9Imh0dHA6Ly9wdXJsLm9yZy9kYy90ZXJtcy8iIHhtbG5zOmRjbWl0eXBlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIi8+UEsDBBQAAAAAAAAAAACo12qAFQgAABUIAAATAAAAW0NvbnRlbnRfVHlwZXNdLnhtbDw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9IlVURi04IiBzdGFuZGFsb25lPSJ5ZXMiPz4NCjxUeXBlcyB4bWxucz0iaHR0cDovL3NjaGVtYXMub3BlbnhtbGZvcm1hdHMub3JnL3BhY2thZ2UvMjAwNi9jb250ZW50LXR5cGVzIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIj48RGVmYXVsdCBFeHRlbnNpb249InhtbCIgQ29udGVudFR5cGU9ImFwcGxpY2F0aW9uL3htbCIvPjxEZWZhdWx0IEV4dGVuc2lvbj0iYmluIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0LmJpbmFyeS5tYWNyb0VuYWJsZWQubWFpbiIvPjxEZWZhdWx0IEV4dGVuc2lvbj0idm1sIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnZtbERyYXdpbmciLz48RGVmYXVsdCBFeHRlbnNpb249ImRhdGEiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQubW9kZWwrZGF0YSIvPjxEZWZhdWx0IEV4dGVuc2lvbj0iYm1wIiBDb250ZW50VHlwZT0iaW1hZ2UvYm1wIi8+PERlZmF1bHQgRXh0ZW5zaW9uPSJwbmciIENvbnRlbnRUeXBlPSJpbWFnZS9wbmciLz48RGVmYXVsdCBFeHRlbnNpb249ImdpZiIgQ29udGVudFR5cGU9ImltYWdlL2dpZiIvPjxEZWZhdWx0IEV4dGVuc2lvbj0iZW1mIiBDb250ZW50VHlwZT0iaW1hZ2UveC1lbWYiLz48RGVmYXVsdCBFeHRlbnNpb249IndtZiIgQ29udGVudFR5cGU9ImltYWdlL3gtd21mIi8+PERlZmF1bHQgRXh0ZW5zaW9uPSJqcGciIENvbnRlbnRUeXBlPSJpbWFnZS9qcGVnIi8+PERlZmF1bHQgRXh0ZW5zaW9uPSJqcGVnIiBDb250ZW50VHlwZT0iaW1hZ2UvanBlZyIvPjxEZWZhdWx0IEV4dGVuc2lvbj0idGlmIiBDb250ZW50VHlwZT0iaW1hZ2UvdGlmZiIvPjxEZWZhdWx0IEV4dGVuc2lvbj0idGlmZiIgQ29udGVudFR5cGU9ImltYWdlL3RpZmYiLz48RGVmYXVsdCBFeHRlbnNpb249InBkZiIgQ29udGVudFR5cGU9ImFwcGxpY2F0aW9uL3BkZiIvPjxEZWZhdWx0IEV4dGVuc2lvbj0icmVscyIgQ29udGVudFR5cGU9ImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1wYWNrYWdlLnJlbGF0aW9uc2hpcHMreG1sIi8+PE92ZXJyaWRlIFBhcnROYW1lPSIveGwvd29ya2Jvb2sueG1sIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQubWFpbit4bWwiLz48T3ZlcnJpZGUgUGFydE5hbWU9Ii94bC93b3Jrc2hlZXRzL3NoZWV0MS54bWwiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC53b3Jrc2hlZXQreG1sIi8+PE92ZXJyaWRlIFBhcnROYW1lPSIveGwvdGhlbWUvdGhlbWUxLnhtbCIgQ29udGVudFR5cGU9ImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC50aGVtZSt4bWwiLz48T3ZlcnJpZGUgUGFydE5hbWU9Ii94bC9zdHlsZXMueG1sIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc3R5bGVzK3htbCIvPjxPdmVycmlkZSBQYXJ0TmFtZT0iL2RvY1Byb3BzL2NvcmUueG1sIiBDb250ZW50VHlwZT0iYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLXBhY2thZ2UuY29yZS1wcm9wZXJ0aWVzK3htbCIvPjxPdmVycmlkZSBQYXJ0TmFtZT0iL2RvY1Byb3BzL2FwcC54bWwiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuZXh0ZW5kZWQtcHJvcGVydGllcyt4bWwiLz48T3ZlcnJpZGUgUGFydE5hbWU9Ii94bC9tZXRhZGF0YS54bWwiIENvbnRlbnRUeXBlPSJhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldE1ldGFkYXRhK3htbCIvPjwvVHlwZXM+UEsBAgAAFAAAAAAAAAAAAKQBhLi1AgAAtQIAABoAAAAAAAAAAAAAAAAAAAAAAHhsL19yZWxzL3dvcmtib29rLnhtbC5yZWxzUEsBAgAAFAAAAAAAAAAAADAPiGveHQAA3h0AABMAAAAAAAAAAAAAAAAA7QIAAHhsL3RoZW1lL3RoZW1lMS54bWxQSwECAAAUAAAAAAAAAAAAVfQElFoEAABaBAAADQAAAAAAAAAAAAAAAAD8IAAAeGwvc3R5bGVzLnhtbFBLAQIAABQAAAAAAAAAAAAmCqjBOAIAADgCAAAYAAAAAAAAAAAAAAAAAIElAAB4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWxQSwECAAAUAAAAAAAAAAAAYIAAgYgDAACIAwAADwAAAAAAAAAAAAAAAADvJwAAeGwvbWV0YWRhdGEueG1sUEsBAgAAFAAAAAAAAAAAANvYkA5EAQAARAEAAA8AAAAAAAAAAAAAAAAApCsAAHhsL3dvcmtib29rLnhtbFBLAQIAABQAAAAAAAAAAABKahH5TAIAAEwCAAALAAAAAAAAAAAAAAAAABUtAABfcmVscy8ucmVsc1BLAQIAABQAAAAAAAAAAAAGniQUNAIAADQCAAAQAAAAAAAAAAAAAAAAAIovAABkb2NQcm9wcy9hcHAueG1sUEsBAgAAFAAAAAAAAAAAANaSfBFaAQAAWgEAABEAAAAAAAAAAAAAAAAA7DEAAGRvY1Byb3BzL2NvcmUueG1sUEsBAgAAFAAAAAAAAAAAAKjXaoAVCAAAFQgAABMAAAAAAAAAAAAAAAAAdTMAAFtDb250ZW50X1R5cGVzXS54bWxQSwUGAAAAAAoACgB7AgAAuzsAAAAA',
          download: 'assignment-belgium-onboarding-learners-template-2026-11-20.xlsx'
        },
        dropzone: {
          description: 'xlsx, xls or csv, up to 5000 rows',
          browse: 'Browse files',
          dropLabel: 'Drop the file here',
          loadingLabel: 'Checking logins…'
        },
        status: 'idle',
        onUpload: onAction,
        removeLabel: 'Remove',
        onRemove: onAction
      },
      individuals: {
        title: 'Individual learners',
        placeholder: 'Search learners by name or login',
        value: '',
        suggestions: [],
        selected: [
          {
            id: 'new-learner',
            label: 'Alex Martin',
            login: 'alex.martin'
          }
        ],
        removeLabel: 'Remove',
        onSearch: onAction,
        onAdd: onAction,
        onRemove: onAction
      },
      total: {
        label: '1 learners',
        detail: '0 learners (upload) + 1 learners (picked)'
      },
      disabled: false,
      populations: {
        title: 'Populations',
        subtitle: 'Learners of these populations, including those who join later.',
        selectAllLabel: 'Select All',
        unselectAllLabel: 'Unselect all',
        search: {
          placeholder: 'Search...',
          value: '',
          onChange: onAction
        },
        emptyMessages: {
          firstMessage: 'No result...',
          secondMessage: 'Try something else'
        },
        options: [
          {
            count: '20 Users',
            name: 'Belgium',
            value: 'belgium',
            selected: true
          }
        ],
        onChange: onAction
      },
      invalidTargets: [],
      invalidLabel: "You can't assign to this population. Remove it to publish."
    },
    contents: {
      title: 'Contents',
      warning:
        "4 content items aren't available to everyone in the current audience. Adding learners or populations can affect access to content. Remove these items from the assignment or adjust the audience before publishing.",
      disabled: false,
      hiddenLabel: 'Unavailable',
      button: {
        label: 'Add content',
        disabled: false,
        onClick: onAction
      },
      checkboxWithTitle: {
        title: '6 items',
        checked: false,
        onChange: onAction,
        disabled: false
      },
      actionButtons: [
        {
          label: 'Delete',
          disabled: true,
          onClick: onAction
        },
        {
          label: 'Select unavailable content (4)',
          disabled: false,
          onClick: onAction
        }
      ],
      list: {
        items: [
          {
            ref: 'learning-base',
            title: 'L’organisation apprenante',
            subtitle: '',
            image:
              'https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg',
            tags: {
              level: 'base',
              label: 'Base',
              iconName: 'book'
            },
            hidden: true,
            hint: "1 learner in the current audience can't access this content.",
            checkbox: {
              checked: false,
              disabled: false,
              onChange: onAction
            },
            deleteButton: {
              label: 'Delete',
              disabled: false,
              onClick: onAction
            }
          },
          {
            ref: 'learning-advanced',
            title: 'L’organisation apprenante',
            subtitle: '',
            image:
              'https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg',
            tags: {
              level: 'advanced',
              label: 'Advanced',
              iconName: 'book'
            },
            hidden: true,
            hint: "1 learner in the current audience can't access this content.",
            checkbox: {
              checked: false,
              disabled: false,
              onChange: onAction
            },
            deleteButton: {
              label: 'Delete',
              disabled: false,
              onClick: onAction
            }
          },
          {
            ref: 'agile-base',
            title: 'Adopter une culture agile',
            subtitle: '',
            image:
              'https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg',
            tags: {
              level: 'base',
              label: 'Base',
              iconName: 'book'
            },
            hidden: true,
            hint: "1 learner in the current audience can't access this content.",
            checkbox: {
              checked: false,
              disabled: false,
              onChange: onAction
            },
            deleteButton: {
              label: 'Delete',
              disabled: false,
              onClick: onAction
            }
          },
          {
            ref: 'agile-advanced',
            title: 'Adopter une culture agile',
            subtitle: '',
            image:
              'https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg',
            tags: {
              level: 'advanced',
              label: 'Advanced',
              iconName: 'book'
            },
            hidden: true,
            hint: "1 learner in the current audience can't access this content.",
            checkbox: {
              checked: false,
              disabled: false,
              onChange: onAction
            },
            deleteButton: {
              label: 'Delete',
              disabled: false,
              onClick: onAction
            }
          },
          {
            ref: 'leadership-base',
            title: 'Passer de manager à leader',
            subtitle: '',
            image:
              'https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg',
            tags: {
              level: 'base',
              label: 'Base',
              iconName: 'book'
            },
            hidden: false,
            checkbox: {
              checked: false,
              disabled: false,
              onChange: onAction
            },
            deleteButton: {
              label: 'Delete',
              disabled: false,
              onClick: onAction
            }
          },
          {
            ref: 'leadership-advanced',
            title: 'Passer de manager à leader',
            subtitle: '',
            image:
              'https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg',
            tags: {
              level: 'advanced',
              label: 'Advanced',
              iconName: 'book'
            },
            hidden: false,
            checkbox: {
              checked: false,
              disabled: false,
              onChange: onAction
            },
            deleteButton: {
              label: 'Delete',
              disabled: false,
              onClick: onAction
            }
          }
        ]
      }
    },
    dates: {
      title: 'Dates',
      fields: [
        {
          min: '2026-11-20',
          type: 'date',
          name: 'startDate',
          title: 'Start date',
          theme: 'coorpmanager',
          value: '2026-12-01',
          suffix: '',
          disabled: false,
          onChange: onAction
        },
        {
          type: 'date',
          name: 'endDate',
          title: 'End date',
          theme: 'coorpmanager',
          value: '2026-12-31',
          suffix: '',
          disabled: false,
          onChange: onAction
        }
      ],
      rule: {
        title: 'Completion rule',
        disabled: false,
        options: [
          {
            title: {
              title: 'All completions count',
              subtitle:
                'A module finished before the start date already counts as done. Camille finished “Fire safety basics” on 12 Sep. On 02 Nov it is already done for her.'
            },
            checked: false,
            disabled: false,
            onChange: onAction
          },
          {
            title: {
              title: 'Only new completions count',
              subtitle:
                'Only completions from the start date count. Camille finished “Fire safety basics” on 12 Sep. She must complete it again after 02 Nov.'
            },
            checked: true,
            disabled: false,
            onChange: onAction
          }
        ]
      },
      reminders: {
        title: 'Notifications',
        hint: 'Emails list the modules and their due dates, never the assignment title.',
        switches: [
          {
            id: 'assignment-onAssign',
            title: 'When the assignment starts',
            value: true,
            disabled: false,
            onChange: onAction
          },
          {
            id: 'assignment-jMinus7',
            title: '7 days before the due date',
            value: true,
            disabled: false,
            onChange: onAction
          },
          {
            id: 'assignment-dueDay',
            title: 'On the due date',
            value: true,
            disabled: false,
            onChange: onAction
          },
          {
            id: 'assignment-overdue',
            title: '1 day after the due date (overdue)',
            value: true,
            disabled: false,
            onChange: onAction
          },
          {
            id: 'assignment-jPlus3',
            title: '3 days after the due date',
            value: true,
            disabled: false,
            onChange: onAction
          }
        ]
      }
    },
    busy: false,
    isFetching: false
  }
};

export default {props: {...shell.props, ...edition, notifications: []}};
