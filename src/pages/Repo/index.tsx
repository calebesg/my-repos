import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Loading } from '../../components/Loading'
import api from '../../libs/api'
import {
  Container,
  Owner,
  GoBackButton,
  List,
  Item,
  Pagination,
} from './styles'

interface Repo {
  name: string
  description: string
  owner: {
    name: string
    avatarUrl: string
  }
}

interface Issue {
  id: string
  url: string
  title: string
  labels: {
    id: string
    name: string
  }[]
  user: {
    name: string
    avatarUrl: string
  }
}

export function Repo() {
  const [repo, setRepo] = useState<Repo>()
  const [issues, setIssues] = useState<Issue[]>([])
  const [page, setPage] = useState(1)

  const params = useParams()

  function fetchIssues(state = 'open', page = 1) {
    const repoName = params?.repo || null

    return api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        page,
        per_page: 5,
      },
    })
  }

  function issuesJsonToObject(json: any[]) {
    return json.map((issue: any) => {
      return {
        id: issue.id,
        url: issue.html_url,
        title: issue.title,
        labels: issue.labels,
        user: {
          name: issue.user.login,
          avatarUrl: issue.user.avatar_url,
        },
      }
    })
  }

  useEffect(() => {
    async function getIssues() {
      const response = await fetchIssues('open', page)
      const issuesSerialized = issuesJsonToObject(response.data)

      setIssues(issuesSerialized)
    }

    getIssues()
  }, [page])

  useEffect(() => {
    async function getRepoData() {
      const repoName = params?.repo || null

      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${repoName}`),
        fetchIssues(),
      ])

      const repoSerialized: Repo = {
        name: repoData.data.name,
        description: repoData.data.description,
        owner: {
          avatarUrl: repoData.data.owner.avatar_url,
          name: repoData.data.owner.login,
        },
      }

      const issuesSerialized = issuesJsonToObject(issuesData.data)

      setRepo(repoSerialized)
      setIssues(issuesSerialized)
    }

    getRepoData()
  }, [])

  function handleChangePage(newPage: number) {
    if (newPage < 1) return
    setPage(newPage)
  }

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

      <List>
        {issues.map(issue => (
          <Item key={issue.id}>
            <img src={issue.user.avatarUrl} alt={issue.user.name} />

            <div className="content">
              <a href={issue.url} target="_blank">
                {issue.title}
              </a>

              {issue.labels.map(label => (
                <span className="label" key={label.id}>
                  {label.name}
                </span>
              ))}

              <strong>{issue.user.name}</strong>
            </div>
          </Item>
        ))}
      </List>

      <Pagination>
        <button
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 1}
        >
          <FaArrowLeft size={16} />
          {`Back ${page - 1}`}
        </button>

        <span>{page}</span>

        <button onClick={() => handleChangePage(page + 1)}>
          {`Next ${page + 1}`}
          <FaArrowRight size={16} />
        </button>
      </Pagination>
    </Container>
  )
}
