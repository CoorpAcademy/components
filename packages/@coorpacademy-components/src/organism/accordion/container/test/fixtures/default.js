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
    <Qcm key="2" {...qcmFixture.props} />,
    <QcmDrag key="3" {...qcmDragFixture.props} />
  ]
};
