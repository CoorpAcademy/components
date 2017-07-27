import React from 'react';
import QcmGraphic from '../../../../../molecule/questions/qcm-graphic';
import Qcm from '../../../../../molecule/questions/qcm';
import Picker from '../../../../../molecule/questions/picker';
import pickerFixture from '../../../../../molecule/questions/picker/test/fixtures/default';
import qcmFixture from '../../../../../molecule/questions/qcm/test/fixtures/default';
import qcmGraphicFixture from '../../../../../molecule/questions/qcm-graphic/test/fixtures/default';
import containerFixture from '../../../container/test/fixtures/default';

export default {
  props: {
    tabProps: containerFixture.props.tabProps,
    type: 'all'
  },
  children: [
    <QcmGraphic key="1" {...qcmGraphicFixture.props} />,
    <Qcm key="2" {...qcmFixture.props} />,
    <Picker key="3" {...pickerFixture.props} />
  ]
};
