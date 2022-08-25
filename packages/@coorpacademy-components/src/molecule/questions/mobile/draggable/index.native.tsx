import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import QuestionChoice from '../../../../atom/choice/index.native';
import {useTemplateContext} from '../../../../template/app-review/template-context';
import {Theme} from '../../../../variables/theme.native';

import type {Choice} from '../../../../types/progression-engine';

export interface DropZoneProps {
  choices: Array<Choice>;
  onPress: (item: Choice) => void;
}

const createDropZoneStyle = (theme: Theme) =>
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

  const handlePress = useCallback((item: Choice) => () => onPress(item), [onPress]);
  const [styleSheet, setStylesheet] = useState<any | null>(null);

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
      onPress={handlePress(item)}
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
  choices: Array<Choice>;
  userChoices: Array<string>;
  testID?: string;
  onPress: (item: Choice) => void;
}

const createStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    pickableChoices: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    choice: {
      margin: theme.spacing.micro
    }
  });

// this algo could be improve using a  single reduce fuction
export const extractSelectedChoices = (
  availableChoices: Array<Choice>,
  userChoices: Array<string>
): Array<Array<Choice>> => {
  const selectedChoices: Array<Choice> = userChoices.reduce(
    (accumulator: Array<Choice>, currentValue) => {
      const foundItem = availableChoices.find(
        availableChoice => availableChoice.label === currentValue
      );
      if (foundItem) {
        return [...accumulator, foundItem];
      }
      return accumulator;
    },
    []
  );

  const notSelectedChoices = availableChoices.filter(
    availableChoice => !userChoices.includes(availableChoice.label)
  );

  return [selectedChoices, notSelectedChoices];
};

const QuestionDraggable = (props: Props) => {
  const templateContext = useTemplateContext();
  const {theme} = templateContext;

  const [styleSheet, setStylesheet] = useState<any | null>(null);

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const handlePress = (item: Choice) => () => props.onPress(item);

  const {choices, onPress, testID, userChoices} = props;
  const [selectedChoices, notSelectedChoices] = extractSelectedChoices(choices, userChoices);

  const mappedunselectedChoices = notSelectedChoices.map((item, index) => (
    <QuestionChoice
      style={styleSheet.choice}
      key={item._id}
      squeezed
      testID={`choice-${item._id}-unselected`}
      onPress={handlePress(item)}
      questionType="qcmDrag"
    >
      {item.label}
    </QuestionChoice>
  ));

  return (
    <View style={styleSheet.container} testID={testID}>
      <DropZone choices={selectedChoices} onPress={onPress} />
      <View style={styleSheet.pickableChoices}>{mappedunselectedChoices}</View>
    </View>
  );
};

export default QuestionDraggable;
