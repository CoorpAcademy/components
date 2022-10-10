import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import ImageBackground from '../../atom/image-background/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';

export interface Props {
  height: number;
}

type StyleSheetType = {
  logo: {
    width: string;
  };
};

const styles: StyleSheetType = StyleSheet.create({
  logo: {
    width: '100%'
  }
});

const BrandLogo = ({height}: Props) => {
  const templateContext = useTemplateContext();
  const {brandTheme} = templateContext;

  const imageStyle: ViewStyle = {
    ...styles.logo,
    height
  };

  const source = {
    uri: brandTheme.images && brandTheme.images['logo-mobile']
  };

  return (
    <ImageBackground style={imageStyle} testID="brand-logo" source={source} resizeMode="contain" />
  );
};

export default BrandLogo;
