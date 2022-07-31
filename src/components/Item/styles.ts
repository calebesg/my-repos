import styled from 'styled-components'

export const Container = styled.li`
  padding: 1rem 0.625rem;
  border-radius: 4px;
  transition: all 0.1s ease-out;

  & + li {
    border-top: 1px solid #333;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    transform: scale(1.01);
    background-color: #333;

    a {
      color: #fff;
    }
  }
`

export const DeleteButton = styled.button.attrs({ type: 'button' })`
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.2);
  transition: all 0.1s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #ff8fa3;
    transform: scale(1.2);
  }
`
