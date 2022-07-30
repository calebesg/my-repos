import { MouseEvent } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, DeleteButton } from './styles'

interface Props {
  text: string
  url: string
  onDelete: (name: string) => void
}

export function Item({ text, url, onDelete }: Props) {
  function handleDelete(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    onDelete(text)
  }

  return (
    <Container>
      <Link to="/oi">
        <span>{text}</span>

        <DeleteButton onClick={handleDelete}>
          <FaTrash size={16} />
        </DeleteButton>
      </Link>
    </Container>
  )
}
