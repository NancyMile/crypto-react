import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import ImageCrypto from './img/imagen-criptos.png';
import Form from './components/Form';

const Container = styled.div`
  max-width:900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width:80%;
  margin: 100 auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato',sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [coins, setCoins] = useState({});
  const [calculationResult, setCalculationResult] = useState({});

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      //has coins
      //console.log(coins);
      const { selectedCurrency, selectedCrypto } = coins

      const calculateCrypto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedCrypto}&tsyms=${selectedCurrency}`;
        const response = await fetch(url)
        const result = await response.json()
        //console.log(result)
        //console.log(result.DISPLAY[selectedCrypto][selectedCurrency])
        setCalculationResult(result.DISPLAY[selectedCrypto][selectedCurrency]);
      }
      calculateCrypto();
    }
  },[coins]);


  return (
    <Container>
      <Image
        src={ImageCrypto}
        alt='image'
      />
      <div>
        <Heading>Evaluate Coins Instantly</Heading>
        <Form
          setCoins={setCoins}
        />
      </div>
    </Container>

  )
}

export default App