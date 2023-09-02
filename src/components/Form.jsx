import React from 'react'
import styled from '@emotion/styled';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: .3s ease;
    &:hover{
      cursor: pointer;
      background-color: #7A7DFE;
    }
`

const Form = () => {
  return (
      <form>
      <InputSubmit
        type='submit'
        value='Calculate'
      />
      </form>
  )
}

export default Form