import React from 'react';
import QcmGraphic from '../../../../../molecule/questions/qcm-graphic';
import QcmDrag from '../../../../../molecule/questions/qcm-drag';
import qcmDragFixture from '../../../../../molecule/questions/qcm-drag/test/fixtures/default';
import qcmGraphicFixture from '../../../../../molecule/questions/qcm-graphic/test/fixtures/default';

export default {
  props: {
    tabProps: [
      {
        title: 'Qcm image',
        isSelected: false
      },
      {
        title: 'Qcm classique',
        isSelected: false
      },
      {
        title: 'Qcm Drag',
        isSelected: false
      }
    ]
  },
  children: [
    <QcmGraphic {...qcmGraphicFixture.props} key="1" />,
    null,
    <QcmDrag {...qcmDragFixture.props} key="3" />
  ]
};
