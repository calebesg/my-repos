import { FormEvent, useCallback, useEffect, useState } from 'react'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'
import { List } from '../../components/List'

import api from '../../libs/api'

import { Container, Form, SubmitButton } from './styles'

export interface Repo {
  name: string
}

export function Home() {
  const [repoName, setRepoName] = useState('')
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const storage = localStorage.getItem('@repos')

    if (storage) {
      setRepos(JSON.parse(storage))
    }
  }, [])

  useEffect(() => {
    const save = setTimeout(() => {
      localStorage.setItem('@repos', JSON.stringify(repos))
    }, 500)

    return () => clearTimeout(save)
  }, [repos])

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      getRepo()
    },
    [repoName, repos]
  )

  async function getRepo() {
    try {
      if (!repoName) throw new Error('The field is empty!')

      setLoading(true)
      const response = await api.get(`/repos/${repoName}`)

      const newRepo: Repo = {
        name: response.data.full_name,
      }

      const hasRepo = repos.find(repo => repo.name === repoName)

      if (hasRepo) throw new Error('This Repo is already registered!')

      setRepos([...repos, newRepo])
      setRepoName('')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = useCallback(
    (repoName: string) => {
      const updateRepos = repos.filter(repo => repo.name !== repoName)
      setRepos(updateRepos)
    },
    [repos]
  )

  function handleChange(text: string) {
    setError('')
    setRepoName(text)
  }

  return (
    <Container>
      <h1>
        <FaGithub size={24} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={error}>
        <span>{error}</span>
        <input
          type="text"
          value={repoName}
          onChange={e => handleChange(e.target.value)}
          placeholder="Adicionar Repositório"
        />

        <SubmitButton type="submit" isLoading={loading}>
          {loading ? (
            <FaSpinner className="spinner" color="#121212" size={14} />
          ) : (
            <FaPlus color="#121212" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List onDeleteItem={handleDelete} list={repos} />
    </Container>
  )
}
