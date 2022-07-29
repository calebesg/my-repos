import { FaGithub, FaPlus } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './styles'

export function Home() {
  return (
    <Container>
      <h1>
        <FaGithub size={24} />
        Meus Repositórios
      </h1>

      <Form>
        <input type="text" placeholder="Adicionar Repositório" />

        <SubmitButton>
          <FaPlus color="#121212" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  )
}
