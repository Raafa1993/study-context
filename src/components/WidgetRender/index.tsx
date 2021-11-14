import React, { useEffect, useState } from 'react'
import { useWidgetStore } from '../../hooks/WidgetStore';
import ButtonWidget from '../Buttons/ButtonWidget';

export default function WidgetRender(props: any) {
  const [componentRender, setComponentRender] = useState(false as any);
  const [hover, setHover] = useState(false)

  const { addContent } = useWidgetStore()

  console.log("props", props)


  useEffect(() => {
    var componentRender = addContent.filter(
      (obj: any) => obj.name === props.item.name,
      )[0];
      
      var comp = {
        component: componentRender.component,
        componentEdit: componentRender.componentEdit,
      };
      
      setComponentRender(comp);
    }, [props]);

    function handleOver() {
      setHover(true)
    }
  
    function handleLeave() {
      setHover(false)
    }
  return (
    <div
      key={props.key}
      id={props.id}
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
      // className={
      //   props.editId === props.id
      //     ? props.item.className + " item-renderized edit"
      //     : props.item.className + " item-renderized"
      // }
    >
      {props.edit === true && (
        <ButtonWidget
          editWidget={props.editWidget}
          removeWidget={props.removeWidget}
          item={props.item}
          id={props.id}
          indice={props.indice}
          componentEdit={componentRender.componentEdit}
          setLoading={props.setLoading}
          hover={hover}
        />
      )}

      {componentRender && (
        <componentRender.component
          updateWidgetColumn={props.updateWidgetColumn}
          template={props.template}
          editWidget={props.editWidget}
          removeWidget={props.removeWidget}
          indice={props.indice}
          item={props.item}
          id={props.id}
          editId={props.editId}
          setLoading={props.setLoading}
          edit={props.edit}
        />
      )}
    </div>
  )
}
