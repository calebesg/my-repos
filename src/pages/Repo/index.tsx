import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../libs/api'

export function Repo() {
  const [repo, setRepo] = useState({})
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

      setRepo(repoData.data)
      setIssues(issuesData.data)
    }

    getRepoData()
  }, [])

  return <h1>Repo: {params?.repo}</h1>
}
