import { Repo } from '../../pages/Home'
import { Item } from '../Item'

import { Container } from './styles'

interface ListProps {
  list: Repo[]
  onDeleteItem: (text: string) => void
}

export function List({ list, onDeleteItem }: ListProps) {
  return (
    <Container>
      {list.map((repo, index) => (
        <Item
          key={index}
          text={repo.name}
          onDelete={onDeleteItem}
          url={repo.name}
        />
      ))}
    </Container>
  )
}
