import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StackedSlides from '../../../organism/review-stacked-slides/index.native';
import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../template-context';
import {Props} from './prop-types';

// import theme from '../../../modules/theme';
// import translations from '../../../translations';
// import {BrandThemeContext} from '../../../app-shared/components/brand-theme-provider';
// import Button from '../../../app-shared/components/button';
// import {HEADER_HEIGHT} from '../../../app-shared/components/header-v2';

// export type _Choice_ = {
//   text?: string,
//   selected: boolean
// };

// export type _Slide_ = {
//   category: string,
//   question: string,
//   instruction: string,
//   type: 'multiSelection' | 'singleSelection' | 'trueOrFalse',
//   choices?: _Choice_[]
// };

// interface Props {
//   slide: _Slide_;
//   num: number;
// }

const createStyleSheet = (theme: Theme, headerHeight: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: headerHeight,
      backgroundColor: theme.colors.white,
      // justifyContent: 'space-between',
      alignItems: 'center'
    },
    header: {
      width: '100%',
      backgroundColor: '#ded',
      height: 70
    }
  });

const ReviewHeader = ({style}) => (
  <View {...style}>
    <Text>review header @todo</Text>
  </View>
);

// const SLIDE_HEIGHT = () => useWindowDimensions().height * 0.75;

// const creatSlideStyle = (num: number) =>
// const creatSlideStyle = (num, width, height) =>
//   StyleSheet.create({
//     slide: {
//       position: 'absolute',
//       top: height / 2 - SLIDE_HEIGHT() / 2 - num * 4,
//       flex: 1,
//       backgroundColor: '#fff',
//       // backgroundColor: theme.colors.white, @todo with props and useEffect
//       height: SLIDE_HEIGHT(),
//       width: width - 40 - num * 8,
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: 25,
//       shadowColor: '#000',
//       shadowOffset: {width: 0, height: -1},
//       shadowOpacity: 0.05,
//       shadowRadius: 16,
//       elevation: 10 - num * 1,
//       borderRadius: 16
//     },
//     category: {
//       fontSize: 12,
//       lineHeight: 16,
//       // color: theme.colors.text.primary, @todo with props
//       // marginBottom: theme.spacing.tiny, @todo with props
//       // marginTop: theme.spacing.small,   @todo with props
//       textAlign: 'center'
//     },
//     question: {
//       fontSize: 16,
//       lineHeight: 22,
//       fontWeight: '700',
//       // color: theme.colors.text.primary, @todo with props
//       textAlign: 'center'
//     },
//     instruction: {
//       fontSize: 12,
//       lineHeight: 16,
//       // color: theme.colors.gray.medium,  @todo with props
//       // marginBottom: theme.spacing.base, @todo with props
//       // marginTop: theme.spacing.small,   @todo with props
//       textAlign: 'center'
//     },
//     button: {
//       width: 287,
//       height: 52,
//       borderRadius: 7
//       // marginTop: theme.spacing.base  @todo with props
//     }
//   });

// const createOptionStyle = selected => {
//   // const brandTheme = React.useContext(BrandThemeContext); @todo with props

//   return StyleSheet.create({
//     box: {
//       width: '100%',
//       // https://stackoverflow.com/a/66561995/959219
//       shadowColor: '#000',
//       shadowOffset: {width: 0, height: -1},
//       shadowOpacity: 0.2,
//       shadowRadius: 16,
//       elevation: 8,
//       // backgroundColor: selected ? brandTheme.colors.primary : theme.colors.white, @todo with props
//       padding: 12,
//       marginTop: 4,
//       marginBottom: 4,
//       borderRadius: 8
//     },
//     text: {
//       fontSize: 15,
//       fontWeight: 'bold',
//       lineHeight: 24,
//       // color: selected ? theme.colors.white : theme.colors.text.primary, @todo with props
//       textAlign: 'center'
//     }
//   });
// };

// const choicesStyle = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

/* {choices.map(({text, selected = false}: _Choice_) => { */
// const Choices = ({choices = []}) => (
//   <View style={choicesStyle.container}>
//     {choices.map(({text, selected = false}, index) => {
//       const optionStyle = createOptionStyle(selected);
//       return (
//         <View style={optionStyle.box} key={`choice-${index}`}>
//           <Text style={optionStyle.text}>
//             {text} {selected}
//           </Text>
//         </View>
//       );
//     })}
//   </View>
// );

// Choices.propTypes = {
//   choices: PropTypes.arrayOf({
//     text: PropTypes.text,
//     selected: PropTypes.bool
//   })
// };

// const Slide = props => {
//   const {validateSlide, slide, num} = props;
//   const {width, height} = useWindowDimensions();

//   const slideStyle = creatSlideStyle(num, width, height);
//   const validateLabel = '__validate'; // translations.validate

//   const templateContext = useTemplateContext();
//   const {analytics} = templateContext;

//   const {
//     answerUI: {isDisabled = false, value = '', model: {type, onChange}} = {
//       isDisabled: false,
//       value: '',
//       model: {type: 'freeText', onChange: () => null}
//     }
//   } = slide;

//   switch (type) {
//     case 'freeText': {
//       return (
//         <View style={slideStyle.slide}>
//           <FreeText
//             isDisabled={isDisabled}
//             onChange={onChange}
//             value={value}
//             testID="free-text"
//             questionType="basic"
//             analytics={analytics}
//           />
//         </View>
//       );
//     }
//     default:
//   }

//   return (
//     <View style={slideStyle.slide}>
//       <Text style={slideStyle.category}>{num}</Text>
//       <Text style={slideStyle.question}>{slide.question}</Text>
//       <Text style={slideStyle.instruction}>{slide.instruction}</Text>

//       <Choices choices={slide.choices} />

//       <Button style={slideStyle.button} onPress={validateSlide} testID={`button-quizzer-validate`}>
//         {validateLabel}
//       </Button>
//     </View>
//   );
// };

const Slides = (props: Props) => {
  const {header, stack, reviewBackgroundAriaLabel, congratsProps} = props;

  const {
    theme,
    display: {headerHeight}
  } = useTemplateContext();

  const [styleSheet, setStylesheet] = useState<any | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme, headerHeight);
    setStylesheet(_stylesheet);
  }, [theme, headerHeight]);

  if (!styleSheet) {
    return null;
  }

  return (
    <View style={styleSheet.container}>
      <ReviewHeader style={styleSheet.header} />
      {stack ? <StackedSlides {...stack} /> : null}
    </View>
  );
};

export default Slides;
