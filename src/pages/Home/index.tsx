import { FormEvent, useCallback, useState } from 'react'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../libs/api'

import { Container, Form, SubmitButton } from './styles'

interface Repo {
  name: string
}

export function Home() {
  const [repoName, setRepoName] = useState('')
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      async function getRepo() {
        setLoading(true)
        try {
          const response = await api.get(`/repos/${repoName}`)

          const newRepo: Repo = {
            name: response.data.full_name,
          }

          setRepos([...repos, newRepo])
        } finally {
          setLoading(false)
        }
      }

      repoName && getRepo()
    },
    [repoName, repos]
  )

  return (
    <Container>
      <h1>
        <FaGithub size={24} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={repoName}
          onChange={e => setRepoName(e.target.value)}
          placeholder="Adicionar Repositório"
        />

        <SubmitButton type="submit" loading={loading}>
          {loading ? (
            <FaSpinner className="spinner" color="#121212" size={14} />
          ) : (
            <FaPlus color="#121212" size={14} />
          )}
        </SubmitButton>
      </Form>
    </Container>
  )
}
