import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  background-color: #1f1f1f;
  border-radius: 4px;
  padding: 2rem;
  margin: -8rem auto 2rem;

  h1 {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
`

interface FormProps {
  error: string
}

export const Form = styled.form<FormProps>`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  position: relative;

  span {
    position: absolute;
    top: -1rem;
    left: 0;
    font-size: 12px;
    color: #ff8fa3;
    opacity: ${props => (props.error !== '' ? 1 : 0)};
    transition: opacity 0.1s ease-out;
  }

  input {
    flex: 1;
    padding: 0.625rem 1rem;
    background-color: transparent;
    border: 1px solid ${props => (props.error !== '' ? '#ff8fa3' : '#333')};
    border-radius: 4px;
    transition: all 0.1s ease-out;

    &:focus {
      border-color: ${props => (props.error !== '' ? '#ff8fa3' : '#888')};
    }
  }
`

interface SubmitButtonProps {
  isLoading: boolean
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
    props.isLoading &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}

  .spinner {
    animation: ${spinnerAnimation} 1s linear infinite;
  }
`
