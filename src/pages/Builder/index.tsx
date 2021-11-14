
import { useState } from 'react';
import ButtonSettings from '../../components/Buttons/ButtonSettings';
import AddContent from '../../components/panelLeft/AddContent';
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
                <h1>Ola fone</h1>
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
