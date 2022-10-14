import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
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
  dropZone: ViewStyle;
  emptyContent: ViewStyle;
  text: TextStyle;
};

const createDropZoneStyle = (theme: Theme): DropZoneStyleSheet =>
  StyleSheet.create({
    choice: {
      margin: theme.spacing.micro
    },
    dropZone: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      borderStyle: 'dashed',
      borderWidth: 2,
      padding: theme.spacing.micro,
      borderColor: theme.colors.gray.light,
      backgroundColor: theme.colors.gray.extra,
      borderRadius: theme.radius.common,
      marginBottom: theme.spacing.tiny
    },
    emptyContent: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: 60
    },
    text: {
      color: theme.colors.gray.medium
    }
  });

const DropZone = (props: DropZoneProps) => {
  const templateContext = useTemplateContext();
  const {theme, translations} = templateContext;
  const {onPress} = props;

  const [styleSheet, setStylesheet] = useState<DropZoneStyleSheet | null>(null);

  useEffect(() => {
    const _stylesheet = createDropZoneStyle(theme);
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

  const hasNoSelectedChoices = mappedSortedChoices.length === 0;

  return (
    <View style={[styleSheet.dropZone, hasNoSelectedChoices && styleSheet.emptyContent]}>
      {hasNoSelectedChoices ? (
        <Text style={styleSheet.text}>{translations.selectSomethingBelow}</Text>
      ) : null}

      {!hasNoSelectedChoices && mappedSortedChoices}
    </View>
  );
};

export interface Props {
  choices: Array<SelectableChoice>;
  testID?: string;
  onPress: (item: SelectableChoice) => () => void;
}

type QuestionDraggableStyleSheet = {
  pickableChoices: ViewStyle;
  choice: ViewStyle;
};

const createStyleSheet = (theme: Theme): QuestionDraggableStyleSheet =>
  StyleSheet.create({
    pickableChoices: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    choice: {
      margin: theme.spacing.micro
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
    <View testID={testID}>
      <DropZone choices={selectedChoices} onPress={onPress} />
      <View style={styleSheet.pickableChoices}>{pickableChoices}</View>
    </View>
  );
};

export default QuestionDraggable;
