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
    transform: scale(1.02);
    background-color: #333;

    a {
      color: #fff;
    }
  }
`
