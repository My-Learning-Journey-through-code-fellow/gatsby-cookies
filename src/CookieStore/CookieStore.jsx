import React, { useState, useEffect } from "react";

const CookieStore = ({ name, minCustomer, maxCustomer, avgSales }) => {
  const [customerNumber, setCustomerNumber] = useState([]);
  const [cookieTotals, setCookieTotals] = useState([]);
  const [total, setTotal] = useState(0);

  function randomSales(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getSales = () => {
    for (let i = 0; i < dailyHours.length; i++) {
      let hourCustomers = randomSales(minCust, maxCust);
      setCustomerNumber(prev => [...prev, hourCustomers]);
    }
    for (let i = 0; i < customerNumber.length; i++) {
      let cookieTotal = customerNumber[i] * avgSales;
      let roundedCookieTotal = Math.round(cookieTotal);
      setCookieTotals(prev => [...prev, roundedCookieTotal]);
      setTotal(prev => prev + roundedCookieTotal);
    }
  }

  useEffect(() => {
    getSales();
  }, []);

  return (
    <tr>
      <td>{name}</td>
      {cookieTotals.map((total, index) => (
        <td key={index}>{total}</td>
      ))}
      <td>{total}</td>
    </tr>
  );
}

export default CookieStore;
