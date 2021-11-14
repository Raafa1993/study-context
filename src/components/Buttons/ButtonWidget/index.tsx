
import { Container, ButtonWidgetEdit, ButtonWidgetRemove } from './styles';

export default function ButtonWidget(props: any) {

  function remove() {
    props.setLoading(true);
    props.removeWidget(props.id);
  }
  return (
    <Container
      style={{ opacity: `${props.hover === true ? "1" : "0"}` }}
    >
      <ButtonWidgetEdit
        onClick={() =>
          props.editWidget(props.item, props.id, props.componentEdit)
        }
      >
        EditICon
      </ButtonWidgetEdit>

      <ButtonWidgetRemove
        onClick={remove}
      >
        DeleteICon
      </ButtonWidgetRemove>
    </Container>
  )
}
