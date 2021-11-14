
import { useState } from 'react';
import ButtonSettings from '../../components/Buttons/ButtonSettings';
import AddContent from '../../components/panelLeft/AddContent';
import RenderWidget from '../../components/RenderWidget';
import { useTemplate } from '../../hooks/Template';
import IconConfig from '../../icons/IconConfig';
import IconContent from '../../icons/IconContent';
import IconFunction from '../../icons/IconFunction';
import IconPage from '../../icons/IconPage';
import IconSection from '../../icons/IconSection';
import { 
  Container,
  Content,
  PanelLeft,
  WidgetLeft,
  PanelCenter,
  Controlers,
  Phone,
  PanelRight,
  WidgetRight,
  PhoneContent,
  PhonePreview,
} from './styles';

export default function Builder() {
  const [preview, setPreview] = useState(false);

  const {
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
    setPageId,
  } = useTemplate();

  const ControllersData = [
    {
      id: 1,
      title: 'Configurações Globais',
      panelLeft: 'Panel Left',
      panelRight: 'Panel Right',
      icon: <IconConfig />

    },
    {
      id: 2,
      title: 'Adicionar Seções',
      panelLeft: 'Panel Left',
      panelRight: 'Panel Right',
      icon: <IconSection />
    },
    {
      id: 3,
      title: 'Adicionar Conteudo',
      panelLeft: 'Panel Left',
      panelRight: 'Panel Right',
      icon: <IconContent />
    },
    {
      id: 4,
      title: 'Adicionar Função',
      panelLeft: 'Panel Left',
      panelRight: 'Panel Right',
      icon: <IconFunction />
    },
    {
      id: 5,
      title: 'Adicionar Paginas',
      panelLeft: 'Panel Left',
      panelRight: 'Panel Right',
      icon: <IconPage />
    },
  ]
  const [active, setActive] = useState(ControllersData[0]);

  function handleClick(row: any) {
    setActive(row);
  }

  const pages = template;
  const length = pages.length;
  
  const nextPage = () => {
    setPageId(pageId === length - 1 ? 0 : pageId + 1);
  };
  
  const prevPage = () => {
    setPageId(pageId === 0 ? length - 1 : pageId - 1);
  };
  
  if (!Array.isArray(pages) || pages.length <= 0) {
    return null;
  }

  function handleSetTemplate(data: any) {
    const newTemplates = [] as any;

    template.map((row: any, key: any) => {
      if (row.pageId === pageId) {
        row.template = data;
      }
      newTemplates.push(row);
    });

    setTemplate([...newTemplates]);
  }

  function handleOnNewPage() {
    template.push({
      pageId: template.length,
      nome: 'mais uma pagina',
      template: [],
    });
  }

  return (
    <Container>
      <Content>
        <PanelLeft>
            <AddContent />

          <WidgetLeft>
          </WidgetLeft>
        </PanelLeft>

        <PanelCenter>
          <Controlers>

            {ControllersData.map((row) => (
              <ButtonSettings
                key={row.id}
                active={active.id === row.id}
                title={row.title}
                onClick={() => handleClick(row)}
              >
                 {row.icon}
              </ButtonSettings>
            ))}

          </Controlers>

          <Phone>
            <PhoneContent>
              <PhonePreview>
                <RenderWidget
                  loading={loading}
                  setLoading={setLoading}
                  template={template.filter((obj: any) => obj.pageId === pageId)[0].template}
                  setTemplate={handleSetTemplate}
                  editWidget={editWidget}
                  editionWidgetEdit={editionWidgetEdit}
                  updateWidgetColumn={updateWidgetColumn}
                  removeWidget={removeWidget}
                />
              </PhonePreview>
            </PhoneContent>
          </Phone>
        </PanelCenter>

        <PanelRight>
          <WidgetRight>

          </WidgetRight>
        </PanelRight>
      </Content>
    </Container>
  )
}
