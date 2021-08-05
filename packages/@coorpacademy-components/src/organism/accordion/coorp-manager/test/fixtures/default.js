import React from 'react';
import QcmDrag from '../../../../../molecule/questions/qcm-drag';
import fixture from '../../../../../molecule/questions/qcm-drag/test/fixtures/default';

export default {
  props: {
    isOpen: true,
    theme: 'setup',
    title: 'QcmDrag',
    content: <QcmDrag {...fixture.props} />
  }
};
