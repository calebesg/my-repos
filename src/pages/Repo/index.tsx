import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import { Loading } from '../../components/Loading'
import api from '../../libs/api'
import { Container, Owner, GoBackButton } from './styles'

interface Repo {
  name: string
  description: string
  owner: {
    name: string
    avatarUrl: string
  }
}

export function Repo() {
  const [repo, setRepo] = useState<Repo>()
  const [issues, setIssues] = useState([])

  const params = useParams()

  useEffect(() => {
    async function getRepoData() {
      const repoName = params?.repo || null

      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ])

      const repoSerialized: Repo = {
        name: repoData.data.name,
        description: repoData.data.description,
        owner: {
          avatarUrl: repoData.data.owner.avatar_url,
          name: repoData.data.owner.login,
        },
      }

      setRepo(repoSerialized)
      setIssues(issuesData.data)
    }

    getRepoData()
  }, [])

  if (!repo) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loading />
      </div>
    )
  }

  return (
    <Container>
      <GoBackButton to="/">
        <FaArrowLeft size={20} />
        Go Back
      </GoBackButton>

      <Owner>
        <img src={repo.owner.avatarUrl} alt={repo.owner.name} />
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>
    </Container>
  )
}
