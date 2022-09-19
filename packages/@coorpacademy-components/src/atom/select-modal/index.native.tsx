import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, ViewStyle, FlexAlignType} from 'react-native';
import {NovaCompositionNavigationArrowDown as ArrowDown} from '@coorpacademy/nova-icons';
import Modal from 'react-native-modal';
import Touchable from '../../hoc/touchable/index.native';
import type {ChoiceItem, QuestionType} from '../../molecule/questions/types';
import {Theme} from '../../variables/theme.native';

import {ANALYTICS_EVENT_TYPE, Analytics} from '../../variables/analytics';
import Space from '../space/index.native';
import Text from '../text/index.native';
import ModalSelect, {OnChangeFunction} from '../../hoc/modal/select/index.native';
import {useTemplateContext} from '../../template/app-review/template-context';

export type Props = {
  analyticsID: string;
  questionType: QuestionType;
  isDisabled?: boolean;
  isFocused?: boolean;
  values: Array<ChoiceItem>;
  value?: string;
  placeholder?: string;
  color?: string;
  onChange: OnChangeFunction;
  onFocus: () => void;
  onBlur: () => void;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  testID?: string;
};

type StyleSheetType = {
  container: {
    alignItems: FlexAlignType;
    flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
  };
  text: {
    flex: number;
    color: string;
    textAlign: string;
  };
};

const ICON_WIDTH = 15;

const createStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    text: {
      flex: 1,
      color: theme.colors.gray.medium,
      textAlign: 'center'
    }
  });

const logEvent = (
  eventName: string,
  analyticsID: String,
  analytics: Analytics,
  questionType: QuestionType
) => {
  analytics &&
    analytics.logEvent(eventName, {
      id: analyticsID,
      questionType
    });
};

const Select = (props: Props) => {
  const templateContext = useTemplateContext();
  const {theme, analytics} = templateContext;
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  const {
    analyticsID,
    onBlur,
    onFocus,
    onChange,
    values,
    placeholder,
    value,
    style,
    textStyle,
    color,
    questionType,
    isFocused = false,
    isDisabled = false,
    testID = 'select'
  } = props;

  const handleFocus = useCallback(() => {
    if (!onFocus) return;

    analytics && logEvent(ANALYTICS_EVENT_TYPE.OPEN_SELECT, analyticsID, analytics, questionType);
    onFocus();
  }, [analytics, analyticsID, onFocus, questionType]);

  const handleBlur = useCallback(() => {
    if (!onBlur) return;

    analytics && logEvent(ANALYTICS_EVENT_TYPE.CLOSE_SELECT, analyticsID, analytics, questionType);
    onBlur();
  }, [analytics, analyticsID, onBlur, questionType]);

  const handleChange = useCallback(
    _value => {
      onChange(_value);
      handleBlur();
    },
    [onChange, handleBlur]
  );

  if (!styleSheet) {
    return null;
  }

  const selectedItem = values.find(item => item.selected);
  const text = (selectedItem && selectedItem.text) || placeholder || null;

  return (
    <>
      <Touchable
        disabled={isDisabled}
        onPress={handleFocus}
        analyticsID={analyticsID}
        testID={`${testID}-input`}
      >
        <View style={[styleSheet.container, style]}>
          <Text style={[styleSheet.text, textStyle, color && {color}]}>{text}</Text>
          <Space type="tiny" />
          <ArrowDown
            color={color || theme.colors.gray.dark}
            height={ICON_WIDTH}
            width={ICON_WIDTH}
          />
        </View>
      </Touchable>
      <Modal
        isVisible={isFocused}
        onSwipeComplete={handleBlur}
        onBackdropPress={handleBlur}
        testID={testID}
      >
        <ModalSelect
          value={value}
          values={values}
          onChange={handleChange}
          onClose={handleBlur}
          testID={`${testID}-modal`}
        />
      </Modal>
    </>
  );
};

export default Select;
