import React from 'react'

const ExchangeRate = ({exchangedData}) => (
  <div className="exchange-rate">
    <h3>Exchange Rate</h3>
    <h3>{exchangedData.exchangeRate}</h3>
    <h3>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</h3>
  </div>
  )

export default ExchangeRate