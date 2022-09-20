import React, {createContext, useContext} from 'react';

type Skin = {
  common: {
    primary: string;
  };
};

type WebContextValues = {
  skin?: Skin;
  translate: (key: string) => string;
};

const Context = createContext({
  translate: (key: string) => key
});

type Props = WebContextValues & {
  children: any;
};

const WebContext = ({skin, translate, children}: Props) => {
  const values = {skin, translate};
  return <Context.Provider value={{...values}}>{children}</Context.Provider>;
};

export const useWebContext = (): WebContextValues => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('❌ [WebContext] useWebContext must be used within a provider <WebContext>');
  }

  return context;
};

export default WebContext;
