import styled from '@emotion/styled'

const Text = styled.div`
    background-color: #B7322C;
    color: #fff;
    padding: 25px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-weight: 700;
`


const Error = ({children}) => {
  return (
      <Text>{children}</Text>
  )
}

export default Error