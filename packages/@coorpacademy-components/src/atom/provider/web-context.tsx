import React, {createContext, useContext, ReactNode} from 'react';

type Skin = {
  common: {
    primary: string;
  };
};

type WebContextValues = {
  skin?: Skin;
  translate: (key: string, data: string) => string;
};

const Context = createContext({
  translate: (key: string, data: string) => key
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
