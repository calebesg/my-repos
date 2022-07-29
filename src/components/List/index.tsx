import { Repo } from '../../pages/Home'
import { Item } from '../Item'

import { Container } from './styles'

interface ListProps {
  list: Repo[]
}

export function List({ list }: ListProps) {
  return (
    <Container>
      {list.map((repo, index) => (
        <Item key={index} text={repo.name} url={repo.name} />
      ))}
    </Container>
  )
}
