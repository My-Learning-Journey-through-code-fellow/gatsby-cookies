import React, { useState, useEffect } from "react";
import CookieStore from "../CookieStore/CookieStore";

const LocationSection = () => {
  const [storeArr, setStoreArr] = useState([]);
  const [name, setName] = useState("");
  const [minCust, setMinCust] = useState("");
  const [maxCust, setMaxCust] = useState("");
  const [avgSales, setAvgSales] = useState("");

  const dailyHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

  function handleSubmit(event) {
    event.preventDefault();
    setStoreArr(prev => [...prev, { name, minCust, maxCust, avgSales }]);
    setName("");
    setMinCust("");
    setMaxCust("");
    setAvgSales("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Min Customers:
          <input type="text" value={minCust} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Max Customers: 
          <input type="text" value={maxCust} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Average Sales:
          <input type="text" value={avgSales} onChange={event => setName(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <article>
        <table>
          <thead>
            <tr>
              <th>Location:</th>
              {dailyHours.map((hour, index) => (
                <th key={index}>{hour}</th>
              ))}
              <th>Daily Location Total</th>
            </tr>
          </thead>
          <tbody>
            {storeArr.map((store, index) => (
              <CookieStore 
              key={index}
              name={store.name}
              minCust={store.minCust}
              maxCust={store.maxCust}
              avgSales={store.avgSales}
              />
            ))}
          </tbody>
        </table>
      </article>
    </div>
  )
}

export default LocationSection;
