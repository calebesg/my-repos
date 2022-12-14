import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 700px;
  background-color: #1f1f1f;
  border-radius: 4px;
  padding: 2rem;
  margin: -8rem auto 2rem;

  @media (max-width: 600px) {
    width: 90%;
  }
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

  @media (max-width: 600px) {
    img {
      width: 6rem;
      margin-top: 1rem;
    }

    h1 {
      font-size: 1.75rem;
    }
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

export const Filter = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 600px) {
    justify-content: center;
    margin-top: 1.25rem;
  }
`

interface FilterButtonProps {
  active: boolean
}

export const FilterButton = styled.button<FilterButtonProps>`
  background-color: #333;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  transition: all 0.1s ease-out;

  ${props =>
    props.active &&
    css`
      background-color: #bbdefb;
      color: #121212;
    `};
`

export const List = styled.ul`
  margin-top: 0.75rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 600px) {
    margin-top: 1.25rem;
  }
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 56px;
    height: 56px;
    border-radius: 4px;
  }

  .content {
    a {
      text-decoration: none;
      line-height: 1.4rem;
      color: #fafafa;
      transition: color 0.1s ease-out;

      &:hover {
        color: #64b5f6;
      }
    }

    .label {
      font-size: 0.675rem;
      background-color: #121212;
      color: #bbdefb;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      margin-left: 0.25rem;
    }

    strong {
      color: #9f9f9f;
      display: block;
      font-size: 0.75rem;
      font-weight: normal;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    align-items: flex-start;
    gap: 0.5rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    .content {
      a {
        font-size: 13px;
        line-height: 1rem;
      }

      strong {
        margin-top: 0.25rem;
      }
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: none;
    transition: all 0.1s ease-out;
    color: #9f9f9f;

    &:hover {
      color: #bbdefb;
    }

    &:disabled {
      opacity: 0;
      cursor: default;
    }
  }

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #bbdefb;
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
