import React, {useCallback, useState} from 'react';
import {View, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import RenderHTML, {
  CustomRendererProps,
  MixedStyleRecord,
  RenderHTMLProps,
  TBlock
} from 'react-native-render-html';

import {HTML_ANCHOR_TEXT_COLOR} from '../../variables/theme.native';
import {useTemplateContext} from '../../template/app-review/template-context';
import Text, {DEFAULT_STYLE as DEFAULT_TEXT_STYLE} from '../text/index.native';

interface CustomRenderHTMLProps extends RenderHTMLProps {
  baseFontStyle?: TextStyle;
  testID?: string;
}

const HtmlBase = (props: CustomRenderHTMLProps) => {
  return <RenderHTML {...props} />;
};

export type Props = {
  children: string;
  fontSize?: TextStyle['fontSize'];
  numberOfLines?: number;
  onLinkPress?: (url: string) => void;
  containerStyle?: ViewStyle;
  anchorTextColor?: string;
  imageStyle?: ImageStyle;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
  isTextCentered?: boolean;
};

type Styles = {
  p: {
    marginVertical: ViewStyle['marginVertical'];
    textAlign: TextStyle['textAlign'];
  };
  u: {
    textDecorationLine: TextStyle['textDecorationLine'];
  };
  i: {
    fontStyle: TextStyle['fontStyle'];
  };
  b: {
    fontWeight: TextStyle['fontWeight'];
  };
  s: {
    textDecorationLine: TextStyle['textDecorationLine'];
  };
};

const Html = (props: Props) => {
  const templateContext = useTemplateContext();
  const [isDisabledBaseFontStyleColor, disableBaseFontStyleColor] = useState<boolean>(false);
  const {theme} = templateContext;
  const {
    children,
    fontSize,
    containerStyle,
    imageStyle,
    style,
    testID,
    anchorTextColor = HTML_ANCHOR_TEXT_COLOR,
    isTextCentered,
    numberOfLines
  } = props;

  // Don't use StyleSheet there, it's not a react style
  const styles: Styles = {
    p: {
      marginVertical: 0,
      textAlign: 'center'
    },
    u: {
      textDecorationLine: 'underline'
    },
    i: {
      fontStyle: 'italic'
    },
    b: {
      fontWeight: theme.fontWeight.bold
    },
    s: {
      textDecorationLine: 'line-through'
    }
  };

  const tagsStyles: MixedStyleRecord = {
    ...styles,
    h1: {fontSize},
    h2: {fontSize},
    h3: {fontSize},
    h4: {fontSize},
    h5: {fontSize},
    h6: {fontSize},
    a: {color: anchorTextColor},
    img: imageStyle || {}
  };

  let baseFontStyle: TextStyle = {...DEFAULT_TEXT_STYLE, fontSize, color: theme.colors.black};
  if (style) {
    if (Array.isArray(style)) {
      const styleObject = style.reduce((result, child) => ({
        ...result,
        ...child
      }));
      baseFontStyle = {
        ...baseFontStyle,
        ...styleObject
      };
    } else {
      baseFontStyle = {
        ...baseFontStyle,
        ...style
      };
    }
  }

  const SpanRenderer = useCallback(
    (htmlAttribs: CustomRendererProps<TBlock>, _children: string) => (
      <Text numberOfLines={numberOfLines}>{_children}</Text>
    ),
    [numberOfLines]
  );

  interface HtmlAttrib extends CustomRendererProps<TBlock> {
    color?: string;
  }

  const FontRenderer = useCallback(
    (htmlAttribs: HtmlAttrib, _children: string) => {
      if (htmlAttribs.color) {
        disableBaseFontStyleColor(true);
      }

      return (
        <Text
          key={1}
          style={{
            ...baseFontStyle,
            color: htmlAttribs.color?.replace(/ /g, '')
          }}
        >
          {_children}
        </Text>
      );
    },
    [baseFontStyle]
  );

  const renderers = {
    font: FontRenderer,
    span: SpanRenderer
  };

  return (
    <View testID={testID} style={containerStyle}>
      <HtmlBase
        // to text-align center on android
        // we have to encapsulate between <p> tag
        // and use custom style define on <p>
        // definition in component style doesn't work
        source={{
          // eslint-disable-next-line no-nested-ternary
          html: isTextCentered
            ? `<p>${children}</p>`
            : numberOfLines
            ? `<span>${children}</span>`
            : `${children}`
        }}
        tagsStyles={tagsStyles}
        baseFontStyle={{
          ...baseFontStyle,
          color: isDisabledBaseFontStyleColor ? undefined : baseFontStyle.color
        }}
        renderers={renderers}
        // this is exceptionally for the onboarding course
        // is the only course that has a gif in the context but the img tag
        // comes with width & height attr and these makes this lib do not render the gif
        // so to avoid it, we decided to ignore these attr
        ignoredStyles={['width', 'height']}
        testID="html-base"
      />
    </View>
  );
};

export default Html;
