import React, {createContext, ReactNode, useContext} from 'react';
import {mockTranslate} from '@coorpacademy/translate';

type Skin = {
  common: {
    primary: string;
  };
};

type WebContextValues = {
  skin?: Skin;
  translate: (key: string, data?: Record<string, string>) => string;
};

const Context = createContext({
  translate: mockTranslate
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
