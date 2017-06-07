import React from 'react';
import QcmImage from '../../../questions/qcm-image';
import Qcm from '../../../questions/qcm';
import Picker from '../../../questions/picker';
import pickerFixture from '../../../questions/picker/test/fixtures/default';
import qcmFixture from '../../../questions/qcm/test/fixtures/default';
import qcmImageFixture from '../../../questions/qcm-image/test/fixtures/default';

export default {
  props: {
    titles: ['Qcm image', 'Qcm classique', 'Picker']
  },
  children: [
    <QcmImage key="1" {...qcmImageFixture.props} />,
    <Qcm key="2" {...qcmFixture.props} />,
    <Picker key="3" {...pickerFixture.props} />
  ]
};
