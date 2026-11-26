import React from 'react';
import Tag from '..';

export default {title: 'Atom/Tag/Label case'};

export const LegacyAndPreservedCase = () => (
  <div style={{padding: 24, fontFamily: 'Gilroy, sans-serif'}}>
    <h3>Default: automatic initial capital</h3>
    <Tag label="eLearning and iOS" type="info" />
    <h3>Preserved: exact supplied label</h3>
    <Tag label="eLearning and iOS" type="info" preserveLabelCase />
  </div>
);
