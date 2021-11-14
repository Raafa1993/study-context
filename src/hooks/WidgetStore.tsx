import { createContext, useContext, useState } from "react";
import IconAddImage from "../icons/IconAddImage";
// import { Image, ImageEdit } from "../Components/Edits/EditImage/EditImage";
// import ImageIcon from "../Icons/ImageIcon";

const WidgetStoreContext = createContext({} as any);

function WidgetStoreProvider({ children }: any) {
  const [addContent, setAddContent] = useState([
    {
    className: "widgetImage",
    name: "imagem",
    ico: 'image',
    icone: <IconAddImage />,
    cat: "conteudo",
    component: 'Image',
    componentEdit: 'ImageEdit',
    options: {
      src: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      borderRadius: "0px",
      padding: "0px",
      width: "100%",
      externalLink: 0,
      linkImage: "https://tropa.digital/",
    },
  },
  {
    className: "widget-contador",
    name: "Contador",
    ico: "timer",
    icone: <IconAddImage />,
    cat: "function",
    component: 'Count',
    componentEdit: 'CountEdit',
    style: {},
    options: {
      colorPrimary: "#0766ff",
      colorSecundary: "#000",
      colorText: "#fff",
      expiration: "Expira em dias",
      borderRadius: "0px",
      date: "2021-12-12",
      time: "00:00",
    },
  },

])

  return (
    <WidgetStoreContext.Provider value={{ 
      addContent,
      setAddContent
    }}>
      {children}
    </WidgetStoreContext.Provider>
  );
}

function useWidgetStore() {
  const context = useContext(WidgetStoreContext);

  return context;
}

export { WidgetStoreProvider, useWidgetStore }