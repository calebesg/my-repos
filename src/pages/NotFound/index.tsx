import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <Container>
      <span>Page Not Found</span>
      <button onClick={() => navigate('/')}>
        Go back to Home
        <FaHome size={16} color="white" />
      </button>
    </Container>
  )
}
