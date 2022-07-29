import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  background-color: #1f1f1f;
  border-radius: 4px;
  padding: 2rem;
  margin: 5rem auto;

  h1 {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
`

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 0.625rem 1rem;
    background-color: transparent;
    border: 1px solid #333;
    border-radius: 4px;
    transition: all 0.2s ease-out;

    &:focus {
      border-color: #888;
    }
  }
`

export const SubmitButton = styled.button`
  background-color: #bbdefb;
  border: none;
  border-radius: 4px;
  padding: 0 0.75rem;
  transition: background 0.1s ease-out;

  &:hover {
    background-color: #64b5f6;
  }
`
