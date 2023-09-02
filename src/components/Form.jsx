import {useEffect} from 'react'
import styled from '@emotion/styled';
import useSelectCoins from '../hooks/useSelectCoins';
import { currency } from '../data/currency';

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
    margin-top: 30px;
    &:hover{
      cursor: pointer;
      background-color: #7A7DFE;
    }
`

const Form = () => {

  const [selectedCurrency, SelectCoins] = useSelectCoins('Choose a coin', currency)

  useEffect(() => {
    const queryAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const response = await fetch(url); //ok 200
      const result = await response.json() //success  Data
      console.log(result.Data)
    }

    queryAPI();

  },[]);

  return (
    <form>
      <SelectCoins />
      {selectedCurrency}
      <InputSubmit
        type='submit'
        value='Calculate'
      />
      </form>
  )
}

export default Form