import React, { createContext, useContext, useEffect, useState } from "react";
// import messageStore from "../Store/MessageStore";
// import widgetStore from "../Store/WidgetStore";

const TemplateContext = createContext({} as any);

function TemplateProvider({ children }: any) {
  const [pageId, setPageId] = useState(0)
  const [loading, setLoading] = useState(false);
  const [template, setTemplate] = useState(
    window.localStorage.getItem("@Builder:template")
      ? JSON.parse(window.localStorage.getItem("@Builder:template") as any)
      : [{
        pageId: 0,
        nome: 'Home',
        template: []
      },],
  );
  const name = "";
  const [editionWidgetEdit, setEditionWidgetEdit] = useState({
    item: null,
    id: null,
    component: null,
  } as any);

  // useEffect(() => {
  //   setLoading(false);
  //   widgetStore.setState();
  // }, [template]);

  function editWidget(item: any, id: any, componentEdit: any) {
    setEditionWidgetEdit({
      item: false,
      id: false,
      component: false,
    });

    setTimeout(function () {
      setEditionWidgetEdit({
        item: item,
        id: id,
        component: componentEdit,
      });
    }, 100);
  }

  function removeWidget(id: any) {
    setLoading(true);

    const newTemplate: any = []
    template.map((row: any) => {
      if ( row.pageId === pageId ) {
        row.template = row.template.filter((obj: any) => obj.id !== id)
      }
      newTemplate.push(row)
    })

    setTemplate([...newTemplate]);
    if (editionWidgetEdit.id === id) {
      setEditionWidgetEdit({
        id: null,
      });
      // alert("Você apagou o widget que você estava editando.");
    }
  }

  function saveWidget(item: any) {
    setLoading(true);

    const newWidget = [{}as any]
    template.map((row: any) => {
      if (row.pageId === pageId) {
        row.template = row.template.filter((obj: any) => obj.id !== item.id )
      }
      newWidget.push(row)
    });
    setTemplate([...newWidget]);
    // console.log("item", item)
    
    // var widgets = [];
    // template.map((row, key) => {
    //   if (row.id === item.id) {
    //     widgets[key] = item;
    //   } else {
    //     widgets[key] = row;
    //   }
    // });
    // setTemplate([...widgets]);
  }

  function updateWidgetColumn(contentState: any, id: any) {

    console.log('template', template)
    console.log('content', contentState)
    console.log('id', id)

    const newWidgets = [{} as any]
    template.map((row: any) => {
      if (row.pageId === pageId) {
        row.template = row.template.filter((obj: any) => obj.id === id)
        row.template.content = [];
        row.template.content = contentState;
      }

      console.log(row.template)
      newWidgets.push(row)
    })
    setTemplate([...newWidgets]);

    // var widgets = [];

    // template.map((row) => {
    //   if (row.id === id) {
    //     row.template.content = [];
    //     row.template.content = contentState;
    //   }
    //   widgets.push(row);
    // });

    // setTemplate(...[widgets]);
  }

  async function handleSaveTemplate() {
    window.localStorage.setItem("template", JSON.stringify(template));
    // messageStore.addSuccess(name + " - Template salvo.");
  }

  function handleResetTemplate() {
    setTemplate([]);
  }

  return (
    <TemplateContext.Provider value={{ 
        editWidget, 
        removeWidget, 
        saveWidget, 
        updateWidgetColumn, 
        handleSaveTemplate, 
        handleResetTemplate, 
        template,
        setTemplate,
        loading,
        setLoading,
        editionWidgetEdit,
        setEditionWidgetEdit,
        pageId,
        setPageId
    }}>
      {children}
    </TemplateContext.Provider>
  );
}

function useTemplate() {
  const context = useContext(TemplateContext);

  return context;
}

export { TemplateProvider, useTemplate }
