import { ReactSortable } from "react-sortablejs";
import WidgetRender from "../WidgetRender";

export default function RenderWidget({
  loading,
  setLoading,
  template,
  setTemplate,
  editWidget,
  removeWidget,
  editionWidgetEdit,
  updateWidgetColumn,
}: any) {

  console.log(template)
  return (
    <ReactSortable
      group="shared"
      animation={150}
      list={template}
      setList={setTemplate}
    >
      {loading === false &&
        template &&
        template.map((item: any, key: any) => (
          <WidgetRender
            updateWidgetColumn={updateWidgetColumn}
            id={item.id}
            item={item}
            indice={key}
            editId={editionWidgetEdit.id}
            setLoading={setLoading}
            template={template}
            editWidget={editWidget}
            removeWidget={removeWidget}
            key={key}
            edit={true}
          />
        ))}
    </ReactSortable>
  );
}
