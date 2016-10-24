{
  'notifications': [
    {
      'type': String,
      'message': String,
      'onClose': Function
    }
  ],
  'breadcrumbs': [
    {
      'icon': String,
      'title': String,
      'href': String
    }
  ],
  'links': [
    {
      'title': String,
      'href': String,
      'type': String // primary / secondary
    }
  ],
  'tabs': [
    {
      'title': String,
      'href': String,
      'selected': Boolean,
    }
  ],
  'content': {
    'groups': [{
      'title': String,
      'disabled': Boolean,
      'fields': [{
        'title': String,
        'value': String,
        'values': [String],
        'placeholder': String,
        'disabled': Boolean,
        'description': String
        'error': String,
        'onChange': Function,
        'type': String
      }]
    }],
    'disabled': Boolean,
    'isModified': Boolean,
    'isPending': Boolean,
    'onSubmit': Function
  }
}
