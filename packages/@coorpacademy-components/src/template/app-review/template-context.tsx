// -----------------------------------------------------------------------------

import React, {createContext, useContext} from 'react';

// -----------------------------------------------------------------------------

const Context = createContext({});

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

type Props = {values: any; children: any};

const TemplateContext = ({values, children}: Props) => {
  return <Context.Provider value={{...values}}>{children}</Context.Provider>;
};

// -----------------------------------------------------------------------------

export {TemplateContext, useTemplateContext};
