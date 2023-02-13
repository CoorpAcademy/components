import React, {createContext, ReactNode, useContext} from 'react';

type Skin = {
  common: {
    primary: string;
  };
};

export type WebContextValues = {
  skin?: Skin;
  translate?: (key: string, data?: Record<string, string>) => string;
};

const Context = createContext({});

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
