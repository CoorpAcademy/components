import React from 'react';
import QcmGraphic from '../../../../../molecule/questions/qcm-graphic';
import QcmDrag from '../../../../../molecule/questions/qcm-drag';
import qcmDragFixture from '../../../../../molecule/questions/qcm-drag/test/fixtures/default';
import qcmGraphicFixture from '../../../../../molecule/questions/qcm-graphic/test/fixtures/default';

export default {
  props: {
    tabProps: [
      {
        title: 'Qcm image'
      },
      {
        title: 'Qcm classique',
        isOpen: true
      },
      {
        title: 'Qcm Drag'
      }
    ]
  },
  children: [
    <QcmGraphic key="1" {...qcmGraphicFixture.props} />,
    null,
    <QcmDrag key="3" {...qcmDragFixture.props} />
  ]
};
