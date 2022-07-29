import styled, { css, keyframes, Keyframes } from 'styled-components'

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
    transition: all 0.1s ease-out;

    &:focus {
      border-color: #888;
    }
  }
`

interface SubmitButtonProps {
  loading: boolean
}

const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SubmitButton = styled.button<SubmitButtonProps>`
  background-color: #bbdefb;
  border: none;
  border-radius: 4px;
  padding: 0 0.75rem;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: #64b5f6;
  }

  &:active {
    transform: scale(1.05);
  }

  ${props =>
    props.loading &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}

  .spinner {
    animation: ${spinnerAnimation} 1s linear infinite;
  }
`
