// -----------------------------------------------------------------------------

import React, {createContext, useContext} from 'react';
import defaultTheme from '../../variables/theme.native';

// -----------------------------------------------------------------------------

const Context = createContext({
  theme: defaultTheme
});

// -----------------------------------------------------------------------------

const useTemplateContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      `❌ [TemplateContext] useTemplateContext must be used within a provider <TemplateContext>`
    );
  }

  return context;
};

// -----------------------------------------------------------------------------

type TemplateContextValues = {
  brandTheme: any;
  theme: any; // TODO type Theme
  translations: any; // TODO type Translations
};

type Props = {values: TemplateContextValues; children: any};

const TemplateContext = ({values, children}: Props) => {
  return <Context.Provider value={{...values}}>{children}</Context.Provider>;
};

// -----------------------------------------------------------------------------

export {TemplateContext, useTemplateContext};
