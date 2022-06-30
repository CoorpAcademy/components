import {View, StyleSheet, ViewStyle} from 'react-native';
import React, {useState, useEffect} from 'react';

interface Props {
  isSelected?: boolean;
  children: string;
  testID?: string;
  style?: ViewStyle;
  theme?: any;
}

type StyleType = {
  boxShadow: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  container: {
    backgroundColor: string;
    borderRadius: number;
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
    overflow: string;
    flexDirection: string;
    alignItems: string;
  };
};

const createStyleSheet = (theme: any) =>
  StyleSheet.create({
    boxShadow: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 6
    },
    container: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.radius.regular,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'stretch'
    }
  });

const QuestionChoiceComponent = ({
  children,
  isSelected = false,
  testID: prefixTestID,
  style,
  theme
}: Props) => {
  const selectedSuffix = prefixTestID && isSelected ? '-selected' : '';

  const [styleSheet, setStylesheet] = useState<StyleType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  return (
    <View style={[styleSheet && styleSheet.boxShadow]}>
      <View
        style={[styleSheet && styleSheet.container]}
        testID={prefixTestID && `${prefixTestID}${selectedSuffix}`}
      >
        {children}
      </View>
    </View>
  );
};

export default QuestionChoiceComponent;
