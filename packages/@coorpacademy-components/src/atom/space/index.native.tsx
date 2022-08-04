import * as React from 'react';
import {View} from 'react-native';
import type {SpaceType} from '../../variables/theme.native';
import {useTemplateContext} from '../../template/app-review/template-context';

interface Props {
  type?: SpaceType;
}

const Space = ({type = 'tiny'}: Props) => {
  const templateContext = useTemplateContext();

  const {theme} = templateContext;

  return <View style={{width: theme.spacing[type], height: theme.spacing[type]}} />;
};

export default Space;
