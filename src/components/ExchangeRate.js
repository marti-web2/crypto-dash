import React from 'react'

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => (
  <div className="exchange-rate">
    <h3>ExchangeRate</h3>
    <h3>{exchangeRate}</h3>
    <h3>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</h3>
  </div>
  )

export default ExchangeRate