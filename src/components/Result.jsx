import styled from "@emotion/styled";


const Result = ({calculationResult}) => {
    //console.log(calculationResult)
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = calculationResult;

  return (
      <div>
          <p>Price: <span>{PRICE}</span></p>
          <p>Highest Price: <span>{HIGHDAY}</span></p>
          <p>Lowest Price: <span>{LOWDAY}</span></p>
          <p>Variation las 24H: <span>{CHANGEPCT24HOUR}</span></p>
          <p>Last Update: <span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Result