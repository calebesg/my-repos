import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 700px;
  background-color: #1f1f1f;
  border-radius: 4px;
  padding: 2rem;
  margin: 5rem auto;
`

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 8rem;
    border-radius: 4px;
  }

  h1 {
    font-size: 2rem;
    line-height: 4rem;
  }

  p {
    font-size: 0.875rem;
    color: #9f9f9f;
    max-width: 400px;
    text-align: center;
    line-height: 1.5rem;
  }
`

export const GoBackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  text-decoration: none;
  color: #9f9f9f;
  transition: color 0.1s ease-out;

  &:hover {
    color: #bbdefb;
  }
`
