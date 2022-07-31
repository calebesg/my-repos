import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 3rem;
  }

  button {
    margin-top: 1rem;
    background-color: #333;
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.1s ease-out;

    &:hover {
      background-color: #222;
    }
  }

  @media (max-width: 600px) {
    span {
      font-size: 2rem;
    }
  }
`
