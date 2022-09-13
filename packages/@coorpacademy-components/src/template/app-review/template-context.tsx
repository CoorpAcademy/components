import React, {createContext, useContext} from 'react';
import {FocusedSelectId, HandleBlur, HandleFocus} from '../../types/app-review';
import {Translations} from '../../types/translations';
import {Analytics} from '../../variables/analytics';
import defaultTheme, {Theme} from '../../variables/theme.native';
import {Vibration} from '../../variables/vibration';

export type TemplateContextValues = {
  analytics?: Analytics;
  brandTheme?: any;
  theme: Theme;
  translations: Translations;
  vibration?: Vibration;
  display: {
    headerHeight: number;
    statusBarHeight: number;
  };
  store: {
    focusedSelectId?: FocusedSelectId;
    handleBlur?: HandleBlur;
    handleFocus?: HandleFocus;
  };
};

type Props = {values: TemplateContextValues; children: any};

const Context = createContext({
  theme: defaultTheme,
  translations: {},
  display: {
    headerHeight: 67,
    statusBarHeight: 42
  },
  store: {}
});

const useTemplateContext = (): TemplateContextValues => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      `❌ [TemplateContext] useTemplateContext must be used within a provider <TemplateContext>`
    );
  }

  return context;
};

const TemplateContext = ({values, children}: Props) => {
  return <Context.Provider value={{...values}}>{children}</Context.Provider>;
};

export {TemplateContext, useTemplateContext};
