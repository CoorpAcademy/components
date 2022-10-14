import React, {createContext, ReactNode, useContext} from 'react';

type Skin = {
  common: {
    primary: string;
  };
};

type WebContextValues = {
  skin?: Skin;
  translate: (key: string, data?: unknown) => string;
};

const Context = createContext({
  translate: (key: string) => key
});

type Props = WebContextValues & {
  children: ReactNode;
};

const WebContext = ({children, ...value}: Props) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useWebContext = (): WebContextValues => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('❌ [WebContext] useWebContext must be used within a provider <WebContext>');
  }

  return context;
};

export default WebContext;
