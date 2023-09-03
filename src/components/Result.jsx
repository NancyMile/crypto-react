import styled from "@emotion/styled";

const Container = styled.div`
    color:#fff;
     font-family: 'Lato', sans-serif;
     display: flex;
     align-items: center;
     gap: 3rem;
     margin-top: 30px;
`
const Text = styled.p`
   font-size: 18px;
  span{
    font-weight: 700;
  }
`
const Price = styled.p`
   font-size: 24px;
  span{
    font-weight: 700;
  }
`
const Image = styled.img`
  width: 120px;
  display: block;

`

const Result = ({calculationResult}) => {
    //console.log(calculationResult)
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = calculationResult;

  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`}  alt="Image"/>
      <div>
        <Price>Price: <span>{PRICE}</span></Price>
        <Text>Highest Price: <span>{HIGHDAY}</span></Text>
        <Text>Lowest Price: <span>{LOWDAY}</span></Text>
        <Text>Variation las 24H: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Last Update: <span>{LASTUPDATE}</span></Text>
       </div>
    </Container>
  )
}

export default Result