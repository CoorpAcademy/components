import React, {useState, useEffect, useMemo} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import type {Choice} from '../../../types/progression-engine.d';

import {Theme} from '../../../variables/theme.native';
import {useTemplateContext} from '../../../template/app-review/template-context';

import Modal from '../index.native';
import ModalSelectItem from '../select-item/index.native';

type ChoiceValue = Pick<Choice, 'value'>;
type ChoiceItem = Pick<Choice, 'items'>;

export type Props = {
  value?: ChoiceValue;
  values: Array<ChoiceItem>;
  onChange: (value: ChoiceValue) => void;
  onClose: () => void;
  testID?: string;
};

type StyleSheetType = {
  content: {
    paddingHorizontal: number;
  };
  separator: {
    borderTopWidth: number;
    borderColor: string;
  };
  list: {
    width: string;
  };
};

const createStyleSheet = (theme: Theme) =>
  StyleSheet.create({
    content: {
      paddingHorizontal: 0
    },
    separator: {
      borderTopWidth: 1,
      borderColor: theme.colors.border
    },
    list: {
      width: '100%'
    }
  });

const keyExtractor = (item: ChoiceItem, index: number) => {
  `modal-select-item-${index + 1}`;
};

const createRenderItem = (value: ChoiceValue, testID: String, onChange: Function) => ({
  item,
  index
}: {
  item: ChoiceItem;
  index: number;
}) => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleChange = (_value: ChoiceValue | void) => () => onChange(value);

  return (
    <ModalSelectItem
      onPress={handleChange(item?.text)}
      isSelected={value === item.text}
      testID={`${testID}-item-${index + 1}`}
    >
      {item.text}
    </ModalSelectItem>
  );
};

const createSeparator = (styleSheet: StyleSheetType) => () => {
  return <View style={styleSheet?.separator} />;
};

const ModalSelect = (props: Props) => {
  const templateContext = useTemplateContext();
  const [styleSheet, setStylesheet] = useState<StyleSheetType | null>(null);
  const {theme} = templateContext;
  const {value, values, onChange, onClose, testID = 'modal-select'} = props;

  useEffect(() => {
    const _stylesheet = createStyleSheet(theme);
    setStylesheet(_stylesheet);
  }, [theme]);

  if (!styleSheet) {
    return null;
  }

  const renderItem = useMemo(createRenderItem(value, testID, onChange), [value, testID, onChange]);
  const renderSeparator = useMemo(createSeparator(styleSheet), [styleSheet]);

  return (
    <Modal onClose={onClose} contentStyle={styleSheet?.content} testID={testID}>
      <FlatList
        data={values}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        style={styleSheet?.list}
        testID={`${testID}-items`}
      />
    </Modal>
  );
};

export default ModalSelect;
