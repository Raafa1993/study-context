import React from 'react'
import { ReactSortable } from 'react-sortablejs';
import { useWidgetStore } from '../../../hooks/WidgetStore';

import { Container, ContentHeader, ContentMain, DragItems } from './styles';

export default function AddContent() {
  const { addContent } = useWidgetStore()
  // const newData = addContent.filter((obj: any) => obj.cat === 'function')

  return (
    <Container>
      <ContentHeader>
        Nome da aplicação
      </ContentHeader>

      <ContentMain>

        <ReactSortable
          animation={150}
          sort={false}
          list={addContent} 
          setList={() => {}}
          group={
            {
              name: 'shared',
              pull: 'clone',
              put: false
            }
          }
        >
          {addContent.map((row: any) => (
            <DragItems>
              {row.icone}
              <span>{row.name}</span>
            </DragItems>
          ))}
        </ReactSortable>

      </ContentMain>
    </Container>
  )
}
