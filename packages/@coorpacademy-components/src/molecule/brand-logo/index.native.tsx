import React from 'react';
import {StyleSheet} from 'react-native';
import ImageBackground from '../../atom/image-background/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';

interface Props {
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

  return (
    <ImageBackground
      style={[styles.logo, {height}]}
      testID="brand-logo"
      source={{
        uri: brandTheme.images['logo-mobile']
      }}
      resizeMode="contain"
    />
  );
};

export default BrandLogo;
