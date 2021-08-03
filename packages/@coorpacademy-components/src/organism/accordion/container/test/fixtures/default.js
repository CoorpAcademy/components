import React from 'react';
import QcmGraphic from '../../../../../molecule/questions/qcm-graphic';
import Qcm from '../../../../../molecule/questions/qcm';
import QcmDrag from '../../../../../molecule/questions/qcm-drag';
import qcmDragFixture from '../../../../../molecule/questions/qcm-drag/test/fixtures/default';
import qcmFixture from '../../../../../molecule/questions/qcm/test/fixtures/default';
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
    <Qcm {...qcmFixture.props} key="2" />,
    <QcmDrag {...qcmDragFixture.props} key="3" />
  ]
};
