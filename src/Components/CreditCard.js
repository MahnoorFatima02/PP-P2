import React from 'react'
import visaLogo from '../images/visa.png';

const CreditCard = (props) => {
  const number = props.number;
  const last3Digits = number.slice(-4);


  const year = parseInt(props.expirationYear.toString().replace(/[{}]/g, ''), 10);
  const yearString = year.toString();
  const last2Dyear = yearString.slice(-2);



 const formatDate = (num) => {
   // Ensure num is a number and then pad it with a leading zero if less than 10
   return num < 10 ? `0${num}` : `${num}`;
 };
  const month = parseInt(props.expirationMonth.toString().replace(/[{}]/g, ''), 10);
  
  const formattedMonth = formatDate(month);

  return (
    <>
      <div>
        <img src={visaLogo} alt="Visa logo" />
      </div>
      <div>
        <h1>● ● ● ● ● ● ● ● ● ● ● ● {last3Digits}</h1>
      </div>
      <div>
        <p>
          {formattedMonth}/ {last2Dyear}
        </p>
      </div>
      <div>
        {props.bank}
      </div>
      <div>
        {props.owner}
      </div>
    </>
  );
}

export default CreditCard
