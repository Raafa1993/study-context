import { createContext, useContext, useEffect, useState } from "react";
import IconAddImage from "../icons/IconAddImage";
import nextId from 'react-id-generator'
// import { Image, ImageEdit } from "../Components/Edits/EditImage/EditImage";
// import ImageIcon from "../Icons/ImageIcon";

interface WidgetTemplate {
  id: string;
  className: string;
  name: string;
  ico: string;
  cat: string;
  icone: any;
  component: string;
  componentEdit: string;
  options: {}
}

interface Widget extends Array<WidgetTemplate>{} {
}

const WidgetStoreContext = createContext({} as any);

function WidgetStoreProvider({ children }: any) {
  
  const [addContent, setAddContent] = useState<Widget>([
    {
    id: nextId(),
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
    id: nextId(),
    className: "widget-contador",
    name: "Contador",
    ico: "timer",
    icone: <IconAddImage />,
    cat: "function",
    component: 'Count',
    componentEdit: 'CountEdit',
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

  // const [defaultTemplate, setDefaultTemplate] = useState([
  //   {
  //     addContent,
  //   }] as any
  // )

  
  // const newTemplate = [] as any;

  // addContent.map((row: any) => {
  //   var item = {} as any
  //   item.id = nextId()
  //   item.template = row


  //   if (row.content) {
  //     row.content.map(
  //       (content: any, contentKey: any) => (item.content[contentKey] = []),
  //     );
  //   }

  //   console.log("row",item)
  //   newTemplate.push(item)
    
    
  // })
  // setAddContent([...newTemplate])
  

  
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