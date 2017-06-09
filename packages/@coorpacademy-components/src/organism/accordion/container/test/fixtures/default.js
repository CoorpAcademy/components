import React from 'react';
import QcmImage from '../../../../../molecule/questions/qcm-image';
import Qcm from '../../../../../molecule/questions/qcm';
import Picker from '../../../../../molecule/questions/picker';
import pickerFixture from '../../../../../molecule/questions/picker/test/fixtures/default';
import qcmFixture from '../../../../../molecule/questions/qcm/test/fixtures/default';
import qcmImageFixture from '../../../../../molecule/questions/qcm-image/test/fixtures/default';

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
        title: 'Picker'
      }
    ]
  },
  children: [
    <QcmImage key="1" {...qcmImageFixture.props} />,
    <Qcm key="2" {...qcmFixture.props} />,
    <Picker key="3" {...pickerFixture.props} />
  ]
};
