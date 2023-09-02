import { useEffect, useState} from 'react'
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

  const [crypto, setCrypto] = useState([]);
  const [selectedCurrency, SelectCoins] = useSelectCoins('Choose a coin', currency);
  const [selectedCrypto, SelectCrypto] = useSelectCoins('Choose Crypto', crypto);

  useEffect(() => {
    const queryAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD";
      const response = await fetch(url); //ok 200
      const result = await response.json() //success  Data
      //console.log(result.Data)
      const arrayCryptos = result.Data.map(crypto => {
        //console.log(crypto.CoinInfo);
        //saving the results on an object, to be used on the crypto select
        const object = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        return object
        //console.log(object);
      })
      //console.log(arrayCryptos);
      setCrypto(arrayCryptos);
    }

    queryAPI();

  },[]);

  return (
    <form>
      <SelectCoins />
      <SelectCrypto/>
      <InputSubmit
        type='submit'
        value='Calculate'
      />
      </form>
  )
}

export default Form