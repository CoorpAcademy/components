import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import QuestionChoice from '../../../../atom/choice/index.native';
import {useTemplateContext} from '../../../../template/app-review/template-context';
import {Theme} from '../../../../variables/theme.native';

import type {SelectableChoice} from '../../types';

export interface DropZoneProps {
  choices: Array<SelectableChoice>;
  onPress: (item: SelectableChoice) => () => void;
}

type DropZoneStyleSheet = {
  choice: ViewStyle;
  selectionArea: ViewStyle;
  text: TextStyle;
};

const createSelectionStyle = (theme: Theme): DropZoneStyleSheet =>
  StyleSheet.create({
    choice: {
      margin: theme.spacing.micro
    },
    selectionArea: {
      flexWrap: 'wrap',
      flexDirection: 'row'
    },
    text: {
      color: theme.colors.gray.medium
    }
  });

const Selection = (props: DropZoneProps) => {
  const templateContext = useTemplateContext();
  const {theme} = templateContext;
  const {onPress} = props;

  const [styleSheet, setStylesheet] = useState<DropZoneStyleSheet | null>(null);

  useEffect(() => {
    const _stylesheet = createSelectionStyle(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const {choices} = props;
  const mappedSortedChoices = choices.map(item => (
    <QuestionChoice
      style={styleSheet.choice}
      key={item._id}
      squeezed
      isSelected
      testID={`choice-${item._id}`}
      onPress={onPress(item)}
      questionType="qcmDrag"
    >
      {item.label}
    </QuestionChoice>
  ));

  return <View style={styleSheet.selectionArea}>{mappedSortedChoices}</View>;
};

export interface Props {
  choices: Array<SelectableChoice>;
  testID?: string;
  onPress: (item: SelectableChoice) => () => void;
}

type QuestionDraggableStyleSheet = {
  container: ViewStyle;
  pickableChoices: ViewStyle;
  choice: ViewStyle;
  line: ViewStyle;
};

const createStyleSheet = (theme: Theme): QuestionDraggableStyleSheet =>
  StyleSheet.create({
    container: {
      flex: 1
    },
    pickableChoices: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    choice: {
      margin: theme.spacing.micro
    },
    line: {
      borderWidth: 1,
      borderColor: '#E1E1E3',
      borderRadius: 17,
      marginHorizontal: 4,
      marginBottom: 24,
      marginTop: 16,
      height: 2
    }
  });

const QuestionDraggable = (props: Props) => {
  const templateContext = useTemplateContext();
  const {theme} = templateContext;

  const [styleSheet, setStylesheet] = useState<QuestionDraggableStyleSheet | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const {choices, onPress, testID} = props;
  const selectedChoices = choices.filter(item => item.selected);

  const pickableChoices = choices
    .filter(item => !item.selected)
    .map((item: SelectableChoice) => (
      <QuestionChoice
        style={styleSheet.choice}
        key={item._id}
        squeezed
        testID={`choice-${item._id}-unselected`}
        onPress={onPress(item)}
        questionType="qcmDrag"
      >
        {item.label}
      </QuestionChoice>
    ));

  return (
    <View testID={testID} style={styleSheet.container}>
      <Selection choices={selectedChoices} onPress={onPress} />
      <View style={styleSheet.line} />
      <View style={styleSheet.pickableChoices}>{pickableChoices}</View>
    </View>
  );
};

export default QuestionDraggable;
