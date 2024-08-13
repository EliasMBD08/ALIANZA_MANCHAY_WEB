import { createContext, useContext, useState } from 'react';

export const HeaderTitleContext = createContext();

export const useHeaderTitle = () => useContext(HeaderTitleContext);

export const HeaderTitleProvider = ({ children }) => {
  const [tituloHeader, setTituloHeader] = useState({ url_img: '', titulo: '' });

  return (
    <HeaderTitleContext.Provider value={{ tituloHeader, setTituloHeader }}>
      {children}
    </HeaderTitleContext.Provider>
  );
};
