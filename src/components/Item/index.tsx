import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from './styles'

interface Props {
  text: string
  url: string
}

export function Item({ text, url }: Props) {
  return (
    <Container>
      <Link to="/">
        <span>{text}</span>

        <FaArrowRight size={16} />
      </Link>
    </Container>
  )
}
